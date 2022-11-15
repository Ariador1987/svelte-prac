<script lang="ts">
    export let title: string = "default title"
    export let headerStyles: string = "";
    let defaultStyles:string = "text-lg capitalize";
</script>

{#if title && headerStyles}
    <h2 class={headerStyles}>
        {title}
    </h2>
{:else}
    <h1 class={defaultStyles}>{title}</h1>
{/if}

