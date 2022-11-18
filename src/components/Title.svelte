<script lang="ts">
    import type ExpenseItem from "../data/ExpenseItemModel";

    export let title: string = "default title"
    export let headerStyles: string = "";
    export let total: number = 0;
    // export let calculateE
    let defaultStyles:string = "text-lg capitalize";
</script>

{#if title && headerStyles}
    <h2 class={headerStyles}>
        {title} {total}$
    </h2>
{:else}
    <h1 class={defaultStyles}>{title}</h1>
{/if}

