<script lang="ts">
	import Button from './Button.svelte';
	import IconTextInput from './Form/IconTextInput.svelte';

	let links = [
		{
			name: 'Dashboard',
			href: '/dashboard'
		},
		{
			name: 'Settings',
			href: '/dashboard/settings'
		}
	];
</script>

{#each links as link}
	<div class="flex flex-row items-end">
		<IconTextInput value={link.name} name="name" label="Link Name">D</IconTextInput>
		<IconTextInput value={link.href} name="href" label="Link URL">D</IconTextInput>
		<Button
			onClick={() => {
				links = links.filter((l) => l !== link);
			}}
            className="bg-error-500 btn-icon h-10 w-10"
		>
			T
		</Button>
	</div>
{/each}
{#if links.length === 0}
    <p>No links</p>
{/if}
<Button
	onClick={() => {
		links = [...links, { name: '', href: '' }];
	}}
>
	New Link
</Button>
