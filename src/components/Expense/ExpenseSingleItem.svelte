<script lang="ts">
    import {getContext} from "svelte";
    import type ExpenseItem from "../../data/ExpenseItemModel";
    export let expenseItem: ExpenseItem;
    
    const removeExpense: (id: number) => ExpenseItem[] = getContext("removeExpense");

    let {title, id, cost} = expenseItem;
    // privates
    let displayAmount: boolean = false;
    const handleClick = (e: MouseEvent) => {
        displayAmount = !displayAmount;
    }
</script>

<li
    class="p-4 rounded-md caplitalize bg-gray-100 w-full border-b-2 border-gray-400"
>
    <div class="">
        <div class="flex justify-between items-center">
            <div class={`inline-flex ${displayAmount && "mb-6"}`}>
                <h2
                    class="text-2xl capitalize mr-2 tracking-widest font-light"
                >
                    {title}
                </h2>
                {#if displayAmount}
                    <button on:click={handleClick} type="button" class="cursor-pointer amount-btn">
                        <i class="fa fa-caret-up" />
                    </button>
                {:else}
                    <button on:click={handleClick} type="button" class="cursor-pointer amount-btn">
                        <i class="fa fa-caret-down" />
                    </button>
                {/if}
            </div>
            <div class="space-x-2">
                <i class="fa fa-pencil text-green-600 cursor-pointer edit-btn" />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <i class="fa fa-trash text-red-600 cursor-pointer delete-btn" on:click="{() => removeExpense(id)}"/>
            </div>
        </div>

        {#if displayAmount}
            <div class="text-lg font-normal" >
                <p>Expense Id: {id}</p>
                <p>Expense Cost: ${cost}</p>
            </div>
        {/if}
    </div>
</li>