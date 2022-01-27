<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2  flex flex-col ">
    <div class="bg-white px-4 py-4 flex flex-col h-5/6 mx-4 my-4 mt-4 mb-4 ml-4 mr-4 justify-between background-gray-0">
        <h3 class="text-2xl sm:text-xl text-gray-500 font-semibold pt-2 pb-1">
            {title}
        </h3>
        {#if paragraphs && paragraphs.length > 0}
            {#each paragraphs as p}
                <p class="text-md text-gray-600 italic">
                    {@html p }
                </p>
            {/each}
        {/if}
        
        <p class="text-sm  text-gray-400 text-right">
            {#if price.min && price.max}
                da  <bold class="text-black font-bold text-md">
                        {price.min}&euro;
                    </bold> 
                a  <bold class="text-black font-bold text-md">
                    {price.max}&euro;
                    </bold>
            {:else}
                <bold class="text-black font-bold text-md">{price}&euro;</bold>
            {/if}
        </p>
    </div>
    
</div>
<script>
    export let title
    export let price
    export let paragraphs
</script>