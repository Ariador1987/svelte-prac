<script lang="ts">
    import svelteLogo from "./assets/svelte.svg";
    import TailwindCss from "./TailwindCSS.svelte";
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

<nav
    class="bg-white text-gray-900 border-b-4 border-gray-300 shadow-xl mx-auto fixed top-0 w-full"
>
    <div
        class="mx-auto w-1/2 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6 px-7 py-4"
    >
        <a href="#" class="flex items-center justify-center cursor-pointer">
            <img src="./src/assets/svelte.svg" alt="" class="mr-4" />
            <span class="capitalize text-4xl text-center"
                >Budget Calculator</span
            >
        </a>
        <a href="#" class="flex items-center justify-center cursor-pointer">
            <i
                class="fa fa-plus fa-2x text-slate-700 mr-4 transition hover:rotate-180"
            />
            <span class="text-lg capitalize">Add expense</span>
        </a>
    </div>
</nav>
<main
    class="container mx-auto max-w-6xl flex justify-center items-center pt-32 md:pt-24 h-screen"
>
    <div
        class="h-[80%] w-3/4 md:w-1/2 max-w-[600px] flex flex-col px-6 py-8 rounded-lg shadow-2xl"
    >
        <h2
            class="mb-4 text-3xl capitalize text-blue-400 tracking-wide font-semibold"
        >
            Total Expenses: $13500
        </h2>
        <h2
            class="mb-4 text-3xl capitalize text-blue-400 tracking-wide font-semibold"
        >
            Expenses List
        </h2>
        <ul class="flex flex-col items-center justify-center gap-4 my-8">
            <li
                class="px-4 py-4 rounded-md caplitalize flex justify-between items-center bg-gray-100 w-full border-b-2 border-gray-400"
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
                <div class="space-x-4">
                    <i class="fa fa-pencil text-green-600 cursor-pointer" />
                    <i class="fa fa-trash text-red-600 cursor-pointer" />
                </div>
            </li>
            <li
                class="px-4 py-4 rounded-md caplitalize flex justify-between items-center bg-gray-100 w-full border-b-2 border-gray-400"
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
                <div class="space-x-4">
                    <i class="fa fa-pencil text-green-600 cursor-pointer" />
                    <i class="fa fa-trash text-red-600 cursor-pointer" />
                </div>
            </li>
            <li
                class="px-4 py-4 rounded-md caplitalize flex justify-between items-center bg-gray-100 w-full border-b-2 border-gray-400"
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
                <div class="space-x-4">
                    <i class="fa fa-pencil text-green-600 cursor-pointer" />
                    <i class="fa fa-trash text-red-600 cursor-pointer" />
                </div>
            </li>
        </ul>

        <button
            class="w-3/4 mx-auto uppercase tracking-widest font-semibold text-sm text-white bg-blue-600 text-center py-2 mt-auto shadow-md transition duration-150 hover:shadow-lg hover:-translate-y-[2px] hover:bg-blue-700"
            >Clear expenses</button
        >
    </div>
</main>

<style lang="scss">
    .random__text {
        &--primary {
            background-color: red;
            color: blue;
        }
    }
</style>
