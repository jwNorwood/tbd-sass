<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../../../Components/Sidebar.svelte';
</script>
<div class="flex flex-row">
	<Sidebar />
	<div class="h-screen w-full">
		<slot />
	</div>
</div>

<style>
</style>