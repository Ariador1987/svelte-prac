<script>
    import Title from "./Title.svelte";

    export let isVisible = false;

    const openOverlay = () => {
        isVisible = true;
    }
</script>

<nav
    class="bg-white text-gray-900 border-b-4 border-gray-300 shadow-xl mx-auto fixed top-0 w-full"
>
    <div
        class="mx-auto w-3/4 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6 px-7 py-4"
    >
        <a href="#" class="flex items-center justify-center cursor-pointer">
            <img src="./src/assets/svelte.svg" alt="" class="mr-4" />
            <span class="capitalize text-4xl text-center"
                >Budget Calculator</span
            >
        </a>
        <a href="#" on:click="{openOverlay}" class="flex items-center justify-center cursor-pointer group">
            <i
                class="fa fa-plus fa-2x text-slate-700 mr-4 transition group-hover:rotate-180"
            />
            <Title title="Add expense"/>
        </a>
    </div>
</nav>
