<script lang="ts">
    import {setContext} from "svelte";
    import TailwindCss from "./TailwindCSS.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Title from "./components/Title.svelte";
    import ExpenseList from "./components/Expense/ExpenseList.svelte";
    import { expenseItems } from "./data/ExpensesData";
    import type ExpenseItem from "./data/ExpenseItemModel";

    export let expensesItems: ExpenseItem[] = expenseItems;

    interface State {
        name: string;
        removeExpense: (id: number) => ExpenseItem[];
    }


    const removeExpense = (id: number): ExpenseItem[] => {
        console.log("click")
        console.log(expenseItems)
        return expensesItems = expensesItems.filter((item) => item.id !== id);
    }

    const state: State = {
        name: "simple name",
        removeExpense,
    }

    const calculateExpenses = (expensesArr: ExpenseItem[]): number => {
        return expensesArr.reduce((cache, currVal) => cache += currVal.cost ,0)
    }

    

    setContext("state", state);
    export let total:number | undefined;

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
<Navbar />
<main
    class="container mx-auto max-w-6xl flex justify-center items-center mt-52 md:mt-38 "
>
    <div
        class="min-h-[80%] w-[95vw] sm:w-3/4 md:w-1/2 max-w-[600px] flex flex-col px-6 py-8 rounded-lg shadow-2xl"
    >
        <Title title="Total expenses:" total={total} headerStyles="mb-4 text-3xl capitalize text-blue-400 tracking-wide font-semibold"/>
        <ExpenseList expenseItems={expensesItems} {calculateExpenses} {total}/>
        <button
            class="w-3/4 mx-auto uppercase tracking-widest font-semibold text-sm text-white bg-blue-600 text-center py-2 mt-auto shadow-md transition duration-150 hover:shadow-lg hover:-translate-y-[2px] hover:bg-blue-700"
            >Clear expenses</button
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
