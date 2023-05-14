<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$types';
	import SvelteTheme from '$lib/components/SvelteThemes/SvelteTheme.svelte';
	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit + TypeScript + TailwindCSS starter'}</title>
</svelte:head>

<Header />

<slot />

<SvelteTheme attribute="data-theme" />
