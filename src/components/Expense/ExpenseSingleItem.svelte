<script lang="ts">
    import type ExpenseItem from "../../data/ExpenseItemModel";
    export let expenseItem: ExpenseItem;

    // privates
    let isOpen: boolean = false;
    const handleClick = (e: MouseEvent) => {
        isOpen = !isOpen;
    }
</script>

<li
    class="p-4 rounded-md caplitalize bg-gray-100 w-full border-b-2 border-gray-400"
>
    <div class="">
        <div class="flex justify-between items-center">
            <div class={`inline-flex ${isOpen && "mb-6"}`}>
                <h2
                    class="text-2xl capitalize mr-2 tracking-widest font-light"
                >
                    {expenseItem.title}
                </h2>
                {#if isOpen}
                    <button on:click={handleClick} type="button" class="cursor-pointer">
                        <i class="fa fa-caret-up" />
                    </button>
                {:else}
                    <button on:click={handleClick} type="button" class="cursor-pointer">
                        <i class="fa fa-caret-down" />
                    </button>
                {/if}
            </div>
            <div class="space-x-2">
                <i class="fa fa-pencil text-green-600 cursor-pointer" />
                <i class="fa fa-trash text-red-600 cursor-pointer" />
            </div>
        </div>

        {#if isOpen}
            <div class="text-lg font-normal" >
                <p>Expense Id: {expenseItem.id}</p>
                <p>Expense Cost: ${expenseItem.cost}</p>
            </div>
        {/if}
    </div>
</li>