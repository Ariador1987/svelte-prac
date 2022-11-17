<script lang="ts">
    import type ExpenseItem from "../data/ExpenseItemModel";

    export let title: string = "default title"
    export let headerStyles: string = "";
    export let total: number | undefined;
    // export let calculateE
    let defaultStyles:string = "text-lg capitalize";
</script>

{#if title && headerStyles}
    <h2 class={headerStyles}>
        {title}{total ?? 0}$
    </h2>
{:else}
    <h1 class={defaultStyles}>{title ?? 0}</h1>
{/if}

