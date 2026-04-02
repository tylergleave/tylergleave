<script>
	let { data } = $props();
	let { project } = data;

	let activeImageIndex = $state(0);
</script>

<svelte:head>
	<title>{project.name} — Tyler Gleave</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<!-- Back nav -->
<div class="border-b border-slate-200 bg-white px-6 py-4">
	<div class="mx-auto max-w-5xl">
		<a
			href="/#projects"
			class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
		>
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Back to Portfolio
		</a>
	</div>
</div>

<div class="px-6 py-14">
	<div class="mx-auto max-w-5xl">

		<!-- Header -->
		<div class="mb-10">
			<h1 class="mb-3 text-4xl font-bold tracking-tight text-slate-900">{project.name}</h1>
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
			>
				<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
				{project.displayUrl}
			</a>
		</div>

		<!-- Hero image -->
		<div class="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
			<img
				src={project.heroImage}
				alt={project.heroAlt}
				class="w-full object-cover object-top"
				style="max-height: 480px;"
			/>
		</div>

		<div class="grid gap-12 lg:grid-cols-3">

			<!-- Main content -->
			<div class="lg:col-span-2">

				<!-- Stats -->
				{#if project.stats.length > 0}
					<div class="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
						{#each project.stats as stat}
							<div class="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
								<p class="text-2xl font-bold text-slate-900">{stat.value}</p>
								<p class="mt-1 text-xs text-slate-500">{stat.label}</p>
							</div>
						{/each}
					</div>
				{/if}

				<!-- Description -->
				<div class="mb-10">
					<h2 class="mb-4 text-xl font-semibold text-slate-900">About This Project</h2>
					<div class="space-y-4">
						{#each project.description.trim().split('\n\n') as paragraph}
							<p class="text-base leading-relaxed text-slate-600">{paragraph}</p>
						{/each}
					</div>
				</div>

				<!-- Screenshot gallery -->
				{#if project.images.length > 0}
					<div>
						<h2 class="mb-4 text-xl font-semibold text-slate-900">Screenshots</h2>

						<!-- Main image -->
						<div class="mb-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
							<img
								src={project.images[activeImageIndex].src}
								alt={project.images[activeImageIndex].alt}
								class="w-full object-cover object-top"
								style="max-height: 400px;"
							/>
						</div>
						<p class="mb-3 text-center text-sm text-slate-400 italic">
							{project.images[activeImageIndex].alt}
						</p>

						<!-- Thumbnails -->
						{#if project.images.length > 1}
							<div class="flex gap-3">
								{#each project.images as img, idx}
									<button
										onclick={() => (activeImageIndex = idx)}
										class="overflow-hidden rounded-lg border-2 transition-all {activeImageIndex === idx
											? 'border-slate-700 opacity-100'
											: 'border-transparent opacity-50 hover:opacity-80'}"
										aria-label="View: {img.alt}"
									>
										<img
											src={img.src}
											alt={img.alt}
											class="h-16 w-28 object-cover object-top"
											loading="lazy"
										/>
									</button>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Sidebar -->
			<div class="flex flex-col gap-8">

				<!-- Visit site CTA -->
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-700"
				>
					Visit {project.displayUrl}
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>

				<!-- Features -->
				<div class="rounded-xl border border-slate-200 bg-slate-50 p-6">
					<h3 class="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
						Features
					</h3>
					<ul class="space-y-2.5">
						{#each project.features as feature}
							<li class="flex items-start gap-2.5 text-sm text-slate-600">
								<svg
									class="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Built with -->
				<div class="rounded-xl border border-slate-200 bg-slate-50 p-6">
					<h3 class="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
						Built With
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span
								class="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
