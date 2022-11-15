<script lang="ts">
    import svelteLogo from "./assets/svelte.svg";
    import TailwindCss from "./TailwindCSS.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Title from "./components/Title.svelte";
    import ExpenseList from "./components/Expense/ExpenseList.svelte";
    import { expenseItems } from "./data/ExpensesData";
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
        <Title title="Total expenses: $13500" headerStyles="mb-4 text-3xl capitalize text-blue-400 tracking-wide font-semibold"/>
        <Title title="Expenses list" headerStyles="mb-4 text-3xl capitalize text-blue-400 tracking-wide font-semibold"/>
        <ExpenseList expenseItems={expenseItems}/>
        <!-- <ul class="flex flex-col items-center justify-center gap-4 mt-8 mb-16">
            <li
                class="p-4 rounded-md caplitalize flex justify-between items-center bg-gray-100 w-full border-b-2 border-gray-400"
            >
                <div class="flex justify-center items-center">
                    <h2
                        class="text-2xl capitalize mr-2 tracking-widest font-light"
                    >
                        Car payment
                    </h2>
                    <span class="cursor-pointer">
                        <i class="fa fa-caret-down" />
                    </span>
                </div>
                <div class="space-x-2">
                    <i class="fa fa-pencil text-green-600 cursor-pointer" />
                    <i class="fa fa-trash text-red-600 cursor-pointer" />
                </div>
            </li>
            <li
                class="p-4 rounded-md caplitalize flex justify-between items-center bg-gray-100 w-full border-b-2 border-gray-400"
            >
                <div class="flex justify-center items-center">
                    <h2
                        class="text-2xl capitalize mr-2 tracking-widest font-light"
                    >
                        Car payment
                    </h2>
                    <span class="cursor-pointer">
                        <i class="fa fa-caret-down" />
                    </span>
                </div>
                <div class="space-x-2">
                    <i class="fa fa-pencil text-green-600 cursor-pointer" />
                    <i class="fa fa-trash text-red-600 cursor-pointer" />
                </div>
            </li>
            <li
                class="p-4 rounded-md caplitalize flex justify-between items-center bg-gray-100 w-full border-b-2 border-gray-400"
            >
                <div class="flex justify-center items-center">
                    <h2
                        class="text-2xl capitalize mr-2 tracking-widest font-light"
                    >
                        Car payment
                    </h2>
                    <span class="cursor-pointer">
                        <i class="fa fa-caret-down" />
                    </span>
                </div>
                <div class="space-x-2">
                    <i class="fa fa-pencil text-green-600 cursor-pointer" />
                    <i class="fa fa-trash text-red-600 cursor-pointer" />
                </div>
            </li>
        </ul> -->

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
