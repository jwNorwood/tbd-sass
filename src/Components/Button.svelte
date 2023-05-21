<script>
    export let onClick;
    export let href;
    export let className = "";
</script>

<!-- if href -->
{#if !!href}
    <a 
        href="{href}"
        class="btn variant-filled {className}"

    >
        <slot />
    </a>
{:else}
    <button 
        class="btn variant-filled {className}"
        type="button" 
        on:click="{onClick}"
    >
        <slot />
    </button>
{/if}

