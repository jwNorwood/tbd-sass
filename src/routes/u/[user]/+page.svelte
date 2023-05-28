<script lang="ts">
	export let data;
	import Button from '../../../Components/Button.svelte';
	const { layoutData } = data;
	const placeholderImage = 'https://via.placeholder.com/150';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="mx-auto flex max-w-xl flex-col px-4 py-8">
	<div class="flex flex-col items-center justify-center pb-8">
		<Avatar
			src={layoutData?.user?.avatar || placeholderImage}
			alt={layoutData?.user?.name}
			class="mb-4"
			width="w-32"
		/>
		<h1 class="text-center text-3xl font-bold">{layoutData?.user?.name}</h1>
		<h2 class="text-center text-xl font-semibold">{layoutData?.title}</h2>
	</div>

	<ul>
		{#each layoutData.links as link}
			<li>
				<Button href={link.href} className="block mb-4">
					{link.name}
				</Button>
			</li>
		{/each}
	</ul>
</div>
