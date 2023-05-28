<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const selected = derived(page, ($page) => $page.url.pathname);
</script>

<AppRail {selected}>
	<AppRailTile label="Dashboard" href="/dashboard">(icon)</AppRailTile>
	<AppRailTile label="Analytics" href="/dashboard/analytics">(icon)</AppRailTile>
	<AppRailTile label="Settings" href="/dashboard/settings">(icon)</AppRailTile>
	<!-- <svelte:fragment slot="lead">Lead</svelte:fragment> -->
	<!-- <svelte:fragment slot="trail">Trail</svelte:fragment> -->
</AppRail>
