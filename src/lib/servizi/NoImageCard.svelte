<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3   flex flex-col  ">
    <div class="flex flex-col h-full  mx-4 my-4 mt-4 mb-4 ml-4 mr-4  { bgColor ? bgColor :'bg-stone-0'}">
        <div class="h-3/5  {titleBgColor ? titleBgColor : ' bg-white '}">
            <h3 class="text-xl sm:text-xl {titleColor ? titleColor : ' text-stone-500 '}  p-4 pt-12 ">
                {title}
            </h3>
        </div>
        <div class="h-2/5 flex flex-col">
            {#if paragraphs && paragraphs.length > 0}
                {#each paragraphs as p}
                    <p class="text-md text-stone-600 italic mt-auto ml-4 mb-2">
                        { p }
                    </p>
                {/each}
            {/if}
            {#if price}
                <p class="text-md  text-stone-500 text-right mt-auto mb-2">
                    {#if price.min && price.max}
                        <span class="text-sm text-stone-200">da</span>  
                        <bold class="text-black font-bold text-md">
                                {price.min}
                        </bold> 
                        <span class="text-sm text-stone-400">a</span>
                        <bold class="text-black font-bold text-md">
                            {price.max}
                        </bold>
                    {:else}
                        {#if duration}
                            <span class="text-sm text-stone-400">{duration}</span>    
                        {/if}    
                        {#if price}
                            <bold class="text-black font-bold text-md pr-2">{price}</bold>
                        {/if} 
                        
                    {/if}
                
                </p> 
            {/if}
            
        </div>
        
        
    </div>
    
</div>
<script>
    export let title
    export let price
    export let paragraphs
    export let duration
    export let titleColor
    export let titleBgColor
    export let bgColor
    console.log(bgColor)
    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
