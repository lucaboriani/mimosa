<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4   flex flex-col  ">
    {#if image}
        <div class="flex items-center bg-gray-300 mx-4">
            <img src="img/{image}" class="px-4 w-full h-40 object-contain bg-gray-300" alt="title" loading="lazy" />
        </div>
    {/if}
    <div class="px-4 pb-4 flex flex-col h-full mx-4  mb-4 ml-4 mr-4 justify-between { bgColor ? bgColor :'bg-gray-0'}">
        
        <h3 class="text-gray-500 border-b-2 py-4 upp">
            {title}
        </h3>
        {#if paragraphs && paragraphs.length > 0}
            {#each paragraphs as p}
                <p class="text-md text-gray-600 italic mt-4">
                    { p }
                </p>
            {/each}
        {/if}
        <p class="text-md  text-gray-500 text-right">
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
                    <span class="text-sm text-gray-400 block">{duration}</span>    
                {/if}    
                <bold class="text-black font-bold text-md pr-2 block">{price}</bold>
            {/if}
           
        </p>
    </div>
    
</div>
<script>
    export let title
    export let price
    export let paragraphs
    export let duration
    export let image
    export let bgColor
    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
