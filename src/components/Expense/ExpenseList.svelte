<script lang="ts">
    import type ExpenseItem from "../../data/ExpenseItemModel";
    import { createEventDispatcher } from "svelte";

    import ExpenseSingleItem from "./ExpenseSingleItem.svelte";
    export let expenseItems: ExpenseItem[];
    const dispatch = createEventDispatcher();

    // item totals
    // $:total = calculateExpenses(expenseItems)
    const clearAllExpenses = () => {
        dispatch("clearExpenses", {expenseItems})
    }
</script>


<ul class="flex flex-col items-center justify-center gap-4 mt-8 mb-16">
    {#each expenseItems as expense}
        <!--  Ovdje možemo imati deklariranu funkciju koja će handlat naš custom Event, 
            ali ćemo FOWRARDAT event NA PARENT GORE u APP.svelte
        -->
       <ExpenseSingleItem expenseItem={expense} on:deleteExpense/>
    {/each}
</ul>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->