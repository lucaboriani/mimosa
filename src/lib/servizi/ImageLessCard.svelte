<div class="w-full sm:w-1/2 md:w-1/2 {width ? width : ' lg:w-1/3' }   flex flex-col  ">
    <div class="flex flex-col h-full  mx-4 mt-2 mb-2 ml-4 mr-4  { bgColor ? bgColor :'bg-stone-0'} justify-between">
        <div class="h-full  {titleBgColor ? titleBgColor : ' bg-white '} pb-4">
            <h3 class="text-xl sm:text-xl {titleColor ? titleColor : ' text-stone-500 '}  p-4  ">
                {title}
            </h3>
            {#if paragraphs && paragraphs.length > 0}
                {#each paragraphs as p}
                    <p class="text-md text-stone-600 italic mt-auto ml-4 mb-2">
                        {@html p }
                    </p>
                {/each}
            {/if}
        </div>
        <div class=" flex flex-col pt-2">
            
            {#if price}
                <p class="text-md  text-stone-500 text-right uppercase mt-auto ">
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
                            <bold class="text-stone-600  text-md pr-2">{price}</bold>
                        {/if} 
                        
                    {/if}
                
                </p> 
            {/if}
            {#if subscription}
                <p class="text-md  text-stone-500 text-right mt-auto uppercase mb-2">
                    <bold class="text-stone-600  text-md pr-2">{subscription}</bold>
                </p>
               
            {/if} 
            
        </div>
        
        
    </div>
    
</div>
<script>
    

    export let uiData
    export let data
    
    let { title, price, text, duration, subscription } = data
    let paragraphs = [text]
    let { titleColor , bgColor, width, titleBgColor, pTextColor} = uiData

    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
