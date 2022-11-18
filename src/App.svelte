<script lang="ts">
    // import {setContext} from "svelte";
    import TailwindCss from "./TailwindCSS.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Title from "./components/Title.svelte";
    import Modal from "./components/Modal.svelte";
    import ExpenseList from "./components/Expense/ExpenseList.svelte";
    import { expenseItems } from "./data/ExpensesData";
    import type ExpenseItem from "./data/ExpenseItemModel";

    export let expensesItems: ExpenseItem[] = expenseItems;
    // reactive
    $: total = calculateExpenses(expensesItems);
    $: isVisible = false;

    const removeExpense = (id: number): ExpenseItem[] => {
        const newItems = expensesItems.filter(x => x.id !== id);
        return expensesItems = newItems;
    }

    const clearAllExpenses = (): ExpenseItem[] => {
        return expensesItems = [];
    }

    const calculateExpenses = (expensesArr: ExpenseItem[]): number => {
        return expensesArr.reduce((cache, currVal) => cache += currVal.cost , 0);
    }

    // U našoj funkciji imamo pristup našem CUSTOM event-u koji smo fowardali GORE iz 2-level deep komponente
    const deleteExpense = (e: CustomEvent) => {
        const id = +e.detail.id;
        removeExpense(id);
    }

    // setContext("removeExpense", removeExpense);
</script>

<TailwindCss />
<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
</svelte:head>
<Modal bind:isVisible/>
<Navbar bind:isVisible/>
<main
    class="container mx-auto max-w-6xl flex justify-center items-center mt-52 md:mt-38 "
>
    <div
    class="min-h-[80%] w-[95vw] sm:w-3/4 md:w-1/2 max-w-[600px] flex flex-col px-6 py-8 rounded-lg shadow-2xl"
    >
    <Title title="Total expenses:" {total} headerStyles="mb-4 text-3xl capitalize text-blue-400 tracking-wide font-semibold"/>
        {#if expensesItems?.length > 0}
            <ExpenseList expenseItems={expensesItems} on:deleteExpense="{deleteExpense}"/>
        {:else}
           <h4 class="text-center text-4xl mb-6">No Items</h4>
        {/if}
        
        <button
            class="w-3/4 mx-auto uppercase tracking-widest font-semibold text-sm text-white bg-blue-400 text-center py-2 mt-auto shadow-md transition duration-150 hover:shadow-lg hover:-translate-y-[2px] hover:bg-blue-500"
            on:click="{clearAllExpenses}">Clear expenses</button
        >
    </div>
</main>

<style lang="scss">
    // .random__text {
    //     &--primary {
    //         background-color: red;
    //         color: blue;
    //     }
    // }
</style>
