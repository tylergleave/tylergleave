import { fail } from '@sveltejs/kit';
import { TURNSTILE_SECRET_KEY, MAILGUN_API_KEY, MAILGUN_DOMAIN } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const message = data.get('message')?.toString().trim();
		const token = data.get('cf-turnstile-response')?.toString();

		// Basic field validation
		if (!name || !email || !message) {
			return fail(400, { error: 'All fields are required.', name, email, message });
		}

		// Turnstile verification
		if (!token) {
			return fail(400, { error: 'Please complete the CAPTCHA.', name, email, message });
		}

		const verifyResponse = await fetch(
			'https://challenges.cloudflare.com/turnstile/v0/siteverify',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					secret: TURNSTILE_SECRET_KEY,
					response: token
				})
			}
		);

		const verifyData = await verifyResponse.json();

		if (!verifyData.success) {
			return fail(400, {
				error: 'CAPTCHA verification failed. Please try again.',
				name,
				email,
				message
			});
		}

		// ── Send via Mailgun ─────────────────────────────────────────────────
		const mailgunForm = new FormData();
		mailgunForm.append('from', `Portfolio Contact <mailgun@${MAILGUN_DOMAIN}>`);
		mailgunForm.append('to', 'tyler.gleave@gmail.com');
		mailgunForm.append('subject', `Portfolio contact from ${name}`);
		mailgunForm.append('text', `Name: ${name}\nEmail: ${email}\n\n${message}`);
		mailgunForm.append(
			'html',
			`<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<hr />
<p>${message.replace(/\n/g, '<br />')}</p>`
		);

		const mailgunResponse = await fetch(
			`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
			{
				method: 'POST',
				headers: {
					Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`
				},
				body: mailgunForm
			}
		);

		if (!mailgunResponse.ok) {
			const errorText = await mailgunResponse.text();
			console.error('Mailgun error:', errorText);
			return fail(500, {
				error: 'Failed to send message. Please try again or email me directly.',
				name,
				email,
				message
			});
		}
		// ────────────────────────────────────────────────────────────────────

		return { success: true };
	}
};
