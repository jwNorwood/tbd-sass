<script lang="ts">
	import { FileButton } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';

	let files;

	const uploadFile = async (file) => {
		console.log(file);
	};
	$: files && uploadFile(files[0]);
</script>

{#if files && files[0]}
	<Avatar
		src={URL.createObjectURL(files[0])}
		initials="JD"
		alt={'User Avatar'}
		class="mb-4"
		width="w-32"
	/>
{/if}
<FileButton bind:files name="avatar" />
