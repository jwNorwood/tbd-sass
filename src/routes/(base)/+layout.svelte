<script lang="ts">
	import '../../app.postcss';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$types';
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>{$page.data.title || 'SvelteKit + TypeScript + TailwindCSS starter'}</title>
</svelte:head>

<Header />

<slot />
