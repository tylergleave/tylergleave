<script>
	import './layout.css';

	let { children } = $props();

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/#about', label: 'About' },
		{ href: '/#projects', label: 'Projects' },
		{ href: '/#contact', label: 'Contact' }
	];
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" href="/favicon.png" type="image/png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<title>Tyler Gleave — Senior Web Developer</title>
	<meta name="description" content="Senior web developer from Ogden, Utah. PHP, Laravel, Python, and more." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-white font-sans text-slate-800">
	<!-- Nav -->
	<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
		<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
			<a href="/" class="text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-600 transition-colors">
				Tyler Gleave
			</a>

			<!-- Desktop nav -->
			<nav class="hidden items-center gap-8 md:flex">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="https://github.com/tylergleave"
					target="_blank"
					rel="noopener noreferrer"
					class="text-slate-500 hover:text-slate-800 transition-colors"
					aria-label="GitHub"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/tyler-gleave/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-slate-500 hover:text-slate-800 transition-colors"
					aria-label="LinkedIn"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>
			</nav>

			<!-- Mobile menu button -->
			<button
				class="md:hidden text-slate-600 hover:text-slate-900"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
				<nav class="flex flex-col gap-4">
					{#each navLinks as link}
						<a
							href={link.href}
							onclick={() => (mobileMenuOpen = false)}
							class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="border-t border-slate-200 bg-slate-50">
		<div class="mx-auto max-w-5xl px-6 py-8">
			<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
				<p class="text-sm text-slate-500">
					© {new Date().getFullYear()} Tyler Gleave. All rights reserved.
				</p>
				<div class="flex items-center gap-5">
					<a
						href="https://github.com/tylergleave"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-slate-500 hover:text-slate-800 transition-colors"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/tyler-gleave/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-slate-500 hover:text-slate-800 transition-colors"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
