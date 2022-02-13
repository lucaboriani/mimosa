<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3   flex flex-col  ">
    <div class="bg-white px-4 py-4 flex flex-col h-5/6 mx-4 my-4 mt-4 mb-4 ml-4 mr-4 justify-between background-gray-0">
        <h3 class="text-2xl sm:text-xl text-gray-500 border-b-2 py-2 upp">
            {title}
        </h3>
        {#if paragraphs && paragraphs.length > 0}
            {#each paragraphs as p}
                <p class="text-md text-gray-600 italic mt-4">
                    { p }
                </p>
            {/each}
        {/if}
        <p class="text-md  text-gray-500 text-right pt-9">
            {#if price.min && price.max}
                <span class="text-sm text-gray-200">da</span>  
                <bold class="text-black font-bold text-md">
                        {price.min}
                </bold> 
                <span class="text-sm text-gray-400">a</span>
                <bold class="text-black font-bold text-md">
                    {price.max}
                </bold>
            {:else}
                {#if duration}
                    <span class="text-sm text-gray-400">{duration}</span>    
                {/if}    
                <bold class="text-black font-bold text-md pr-2">{price}</bold>
            {/if}
           
        </p>
    </div>
    
</div>
<script>
    export let title
    export let price
    export let paragraphs
    export let duration
    console.log(price, typeof price)
    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
