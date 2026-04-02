<script>
	import { projects } from '$lib/projects.js';
	import { enhance } from '$app/forms';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

	/** @type {import('./$types').ActionData} */
	let { form } = $props();

	let submitting = $state(false);

	function resetForm() {
		// Resetting via page navigation re-renders the form cleanly
		// and resets the Turnstile widget automatically
		window.location.hash = '#contact';
		window.location.reload();
	}
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<!-- ─── Hero ─────────────────────────────────────────────── -->
<section class="border-b border-slate-200 bg-slate-50 px-6 py-24 text-center">
	<div class="mx-auto max-w-3xl">
		<p class="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
			Senior Web Developer
		</p>
		<h1 class="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
			Tyler Gleave
		</h1>
		<p class="mx-auto max-w-xl text-lg leading-relaxed text-slate-600">
			Building full-stack web applications from Ogden, Utah — with 10+ years of experience
			turning ideas into polished, maintainable software.
		</p>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="#projects"
				class="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-700"
			>
				View My Work
			</a>
			<a
				href="#contact"
				class="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
			>
				Get in Touch
			</a>
		</div>
	</div>
</section>

<!-- ─── About ──────────────────────────────────────────────── -->
<section id="about" class="px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="grid gap-12 md:grid-cols-2 md:items-center">
			<div>
				<div class="mb-7 flex items-center gap-5">
					<img
						src="/images/tyler_headshot.jpg"
						alt="Tyler Gleave"
						class="h-20 w-20 rounded-full object-cover shadow-md ring-2 ring-slate-200"
					/>
					<div>
						<h2 class="text-3xl font-bold tracking-tight text-slate-900">About Me</h2>
						<p class="mt-1 text-sm text-slate-500">Ogden, Utah</p>
					</div>
				</div>
				<p class="mb-4 text-base leading-relaxed text-slate-600">
					I'm a senior web developer based in Ogden, Utah with over a decade of hands-on experience
					building web applications. My roots are in PHP — particularly <strong class="text-slate-800"
						>Laravel</strong
					>
					and <strong class="text-slate-800">CakePHP</strong> — and I've built everything from
					community platforms to time-critical emergency tools.
				</p>
				<p class="mb-4 text-base leading-relaxed text-slate-600">
					Beyond PHP, I'm fluent in <strong class="text-slate-800">Python</strong>,
					<strong class="text-slate-800">SQL</strong>, and comfortable managing the
					<strong class="text-slate-800">Linux</strong> server infrastructure that keeps it all running.
					I care about writing code that's clean, maintainable, and built to last.
				</p>
				<p class="text-base leading-relaxed text-slate-600">
					When I'm not at a keyboard, you'll find me flying airplanes, destroying strangers at
					trivia night, or chasing down whatever new thing I've decided to learn this month.
				</p>
			</div>

			<div class="rounded-xl border border-slate-200 bg-slate-50 p-8">
				<h3 class="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
					Tech Stack
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['PHP', 'Laravel', 'CakePHP', 'Python', 'MySQL', 'PostgreSQL', 'Linux', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs', 'SvelteKit'] as skill}
						<span
							class="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
						>
							{skill}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ─── Projects ──────────────────────────────────────────── -->
<section id="projects" class="border-t border-slate-200 bg-slate-50 px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-12 text-center">
			<h2 class="mb-3 text-3xl font-bold tracking-tight text-slate-900">Projects</h2>
			<p class="text-base text-slate-500">
				A selection of things I've built and am proud enough to talk about.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each projects as project}
				<a
					href="/projects/{project.slug}"
					class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
				>
					<!-- Thumbnail -->
					<div class="overflow-hidden bg-slate-100">
						<img
							src={project.heroImage}
							alt={project.heroAlt}
							class="h-44 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</div>

					<div class="flex flex-1 flex-col p-5">
						<h3 class="mb-2 text-base font-semibold leading-snug text-slate-900">
							{project.name}
						</h3>
						<p class="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
							{project.summary}
						</p>
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags.slice(0, 3) as tag}
								<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
									{tag}
								</span>
							{/each}
							{#if project.tags.length > 3}
								<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-400">
									+{project.tags.length - 3} more
								</span>
							{/if}
						</div>
					</div>

					<div class="border-t border-slate-100 px-5 py-3">
						<span class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
							View Project
							<svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ─── Contact ───────────────────────────────────────────── -->
<section id="contact" class="border-t border-slate-200 px-6 py-20">
	<div class="mx-auto max-w-2xl">
		<div class="mb-10 text-center">
			<h2 class="mb-3 text-3xl font-bold tracking-tight text-slate-900">Get in Touch</h2>
			<p class="text-base text-slate-500">
				Have a project in mind or just want to say hello? Drop me a message.
			</p>
		</div>

		{#if form?.success}
			<div class="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
				<svg
					class="mx-auto mb-4 h-10 w-10 text-green-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<h3 class="mb-2 text-lg font-semibold text-green-800">Message sent!</h3>
				<p class="mb-6 text-sm text-green-700">Thanks for reaching out. I'll get back to you soon.</p>
				<button
					onclick={resetForm}
					class="text-sm font-medium text-green-700 underline hover:text-green-900"
				>
					Send another message
				</button>
			</div>
		{:else}
			<form
				method="POST"
				action="?/contact"
				class="space-y-5"
				use:enhance={() => {
					submitting = true;
					return async ({ update }) => {
						await update();
						submitting = false;
					};
				}}
			>
				{#if form?.error}
					<div class="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
						{form.error}
					</div>
				{/if}

				<div class="grid gap-5 sm:grid-cols-2">
					<div>
						<label for="name" class="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
						<input
							id="name"
							name="name"
							type="text"
							value={form?.name ?? ''}
							required
							placeholder="Your name"
							class="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
						/>
					</div>
					<div>
						<label for="email" class="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							value={form?.email ?? ''}
							required
							placeholder="you@example.com"
							class="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
						/>
					</div>
				</div>
				<div>
					<label for="message" class="mb-1.5 block text-sm font-medium text-slate-700"
						>Message</label
					>
					<textarea
						id="message"
						name="message"
						required
						rows="5"
						placeholder="What's on your mind?"
						class="w-full resize-none rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
					>{form?.message ?? ''}</textarea>
				</div>

				<!-- Cloudflare Turnstile widget -->
				<div class="cf-turnstile" data-sitekey={PUBLIC_TURNSTILE_SITE_KEY}></div>

				<button
					type="submit"
					disabled={submitting}
					class="w-full rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
				>
					{submitting ? 'Sending…' : 'Send Message'}
				</button>
				<p class="text-center text-xs text-slate-400">
					Or email me directly at
					<a
						href="mailto:tyler.gleave@gmail.com"
						class="text-slate-600 underline hover:text-slate-900"
					>
						tyler.gleave@gmail.com
					</a>
				</p>
			</form>
		{/if}
	</div>
</section>
