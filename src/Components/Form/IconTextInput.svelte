<script lang="ts">
	export let label: string = null;
	export let value: string;
	export let name: string;
	export let type: string = 'text';
	export let placeholder: string = '';
</script>

<div class="mr-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
	{#if label}
		<label for={name} class="block text-sm font-medium leading-6 text-gray-900">
			{label}
		</label>
	{/if}
	<div class="relative mt-2 rounded-md shadow-sm">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
			<slot />
		</div>
		<input
			{type}
			{name}
			class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			{placeholder}
			{value}
		/>
	</div>
</div>
