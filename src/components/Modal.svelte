<script lang="ts">
    export let isVisible = true;

    let name = "";
    let amount: number = null;
    let showAlert = false;

    $: isEmpty = !amount || !name;

    const closeOverlay = () => {
        isVisible = false;
    }

    const showAlertNotification = (shouldDisplayAlert = false, timeToClose = 1500) => {
        if (shouldDisplayAlert) {
            setTimeout(() => {
                showAlert = false;
                showAlertNotification();
            }, timeToClose);
        }
    }

    const handleSubmit = (e) => {
        if (isEmpty) {
            showAlert = true;
            showAlertNotification(showAlert);
        }
    }
</script>

<div class={`absolute inset-0 h-full w-full bg-gray-100 z-30 flex justify-center items-center transition duration-500 ${isVisible ? "scale-1" : "scale-0"}`}>
    <form on:submit|preventDefault={handleSubmit} class="absolute z-40 bg-white min-h-1/2 w-1/2 px-16 py-8 rounded-md shadow-md flex flex-col items-center justify-between">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <i class="fa fa-times fa-2x absolute top-3 right-3 text-gray-500 cursor-pointer" on:click="{closeOverlay}"></i>
        <div>
            <h2 class="text-3xl uppercase tracking-wide text-blue-400 mb-2">Add item</h2>
            <div class="w-1/4 bg-cyan-200 h-[2px] mx-auto"></div>
        </div>
        <div class="flex-1 my-24 rounded-lg w-3/4">
            <div class="flex flex-col gap-4 items-center justify-center w-full">
                <input bind:value={name} type="text" placeholder="Enter name" class="w-full px-3 py-1 shadow-md border-b border-transparent focus:outline-none focus:border-b focus:border-cyan-400">
                <input bind:value={amount} type="number" min="0" placeholder="Enter amount" class="w-full px-3 py-1 shadow-md border-b border-transparent focus:outline-none focus:border-b focus:border-cyan-400">
                <input type="hidden">
            </div>
        </div>
        {#if isEmpty && showAlert}
            <p class="capitalize mb-6 text-red-600 absolute bottom-[20%]">please fill out all form fields</p>
        {/if}
        
        <button class={`w-3/4 py-2 text-sm text-center uppercase text-white bg-blue-400 rounded-full shadow-md transition  hover:text-white hover:bg-blue-500 hover:shadow-lg hover:-translate-y-[2px] ${isEmpty ? "cursor-not-allowed" : "cursor-pointer"}`}>Submit</button>
    </form>
</div>

<style lang="scss">

</style>