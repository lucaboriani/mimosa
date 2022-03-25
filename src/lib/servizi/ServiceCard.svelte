<div class="w-full sm:w-1/2 md:w-1/2 {width ? width : ' lg:w-1/3' }   flex flex-col   card">
    <div class="flex items-center   mx-4">
        {#if image}
            <img src="../img/{image}" class="px-4 w-full h-40 object-contain {imageBg ? imageBg : ' bg-gray-300'}" alt="title" loading="lazy" />
        {/if}
    </div>
    
    <div class="px-4 py-4 flex flex-col h-full  mx-4  mb-4 ml-4 mr-4  { bgColor ? bgColor :'bg-gray-0'} card-content">
        <h3 class="text-2xl sm:text-xl {titleColor ? titleColor : ' text-gray-500 '} border-b-2 py-2">
            {title}
        </h3>
        {#if paragraphs && paragraphs.length > 0}
            {#each paragraphs as p}
                <p class="text-md text-gray-600 italic mt-4">
                    {@html p }
                </p>
            {/each}
        {/if}
        <p class="text-md  { pTextColor ? pTextColor : ' text-gray-500' } text-right pt-9 mt-auto">
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
                    <div class="flex justify-end items-end">
                        <img src="../img/clock-1.svg" alt="time icon" loading="lazy" class="w-5" />
                        <span class="text-gray-400 pl-1">
                            
                            {duration}
                        </span> 
                    </div>
                       
                {/if}    
                {#if price}
                    <bold class="text-black font-bold text-md pr-2">{price}</bold>
                {/if} 
                
            {/if}
           
        </p>
    </div>
    
</div>
<script>
    
    export let uiData
    export let data
    
    let { title, price, text, duration,image } = data
   
    let paragraphs = Array.isArray(text) ? text : [text]
    
    let { titleColor , bgColor, width, imageBg, pTextColor} = uiData
   
    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
