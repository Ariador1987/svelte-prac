<script lang="ts">
    import type IExpenseItem from "../../data/ExpenseItemModel";
    import ExpenseSingleItem from "./ExpenseSingleItem.svelte";
    export let expenseItems: IExpenseItem[];

    // item totals
    let total: string | Number = "No total";
    if (expenseItems) {
        total = expenseItems.reduce((acc, currVal) => acc += currVal.cost, 0)
    }
</script>

<ul class="flex flex-col items-center justify-center gap-4 mt-8 mb-16">
    {#each expenseItems as expense}
       <ExpenseSingleItem expenseItem={expense}/>
    {/each}
</ul>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->