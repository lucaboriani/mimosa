<div class="w-full {width ? width : ' lg:w-1/3' }   flex flex-col lg:flex-row   card">
    <div class="flex items-center   ">
        {#if image}
            <img src="../img/{image}" class="px-4 w-full h-40 object-contain {imageBg ? imageBg : ' bg-stone-300'}" alt="title" loading="lazy" />
        {/if}
    </div>  
    <div class="px-4 py-4 flex flex-col h-full  lg:mx-4  mb-4 ml-4 mr-4  { bgColor ? bgColor :'bg-stone-0'} card-content justify-center">
        <h3 class="text-2xl sm:text-xl {titleColor ? titleColor : ' text-stone-500 '} border-b-2 py-2">
            {title}
        </h3>
        {#if paragraphs && paragraphs.length > 0}
            {#each paragraphs as p}
                <p class="text-md text-stone-600 italic mt-4">
                    {@html p }
                </p>
            {/each}
        {/if}
        {#if price}
        <p class="text-md  { pTextColor ? pTextColor : ' text-stone-500' } text-right pt-9 mt-auto">
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
                    <div class="flex justify-end items-end">
                        <img src="../img/clock-1.svg" alt="time icon" loading="lazy" class="w-5" />
                        <span class="text-stone-400 pl-1">
                            
                            {duration}
                        </span> 
                    </div>
                       
                {/if}    
                {#if price}
                    <bold class="text-black font-bold text-md pr-2">{price}</bold>
                {/if} 
                
            {/if}
           
        </p>
        {/if }
        
    </div>
    
</div>
<script>
    
    export let uiData
    export let data
    
    let { title, price, text, duration,image } = data
   
    let paragraphs = Array.isArray(text) ? text : [text]
    console.log(paragraphs)
    let { titleColor , bgColor, width, imageBg, pTextColor} = uiData
   
    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
