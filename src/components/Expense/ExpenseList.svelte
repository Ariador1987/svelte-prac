<script lang="ts">
    import type ExpenseItem from "../../data/ExpenseItemModel";

    import ExpenseSingleItem from "./ExpenseSingleItem.svelte";
    export let expenseItems: ExpenseItem[];
    export let calculateExpenses: (expenseArr: ExpenseItem[]) => number;
    export let total: number;

    

    // item totals
    $:total = calculateExpenses(expenseItems)
</script>


<ul class="flex flex-col items-center justify-center gap-4 mt-8 mb-16">
    {#each expenseItems as expense}
       <ExpenseSingleItem expenseItem={expense} />
    {/each}
</ul>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->