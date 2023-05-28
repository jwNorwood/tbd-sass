<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import Button from './Button.svelte';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">
        <Button href="/dashboard">
            Login
        </Button>
    </svelte:fragment>
</AppBar>
