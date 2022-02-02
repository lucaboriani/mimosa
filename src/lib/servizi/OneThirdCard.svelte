<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3   flex flex-col  ">
    <div class="flex items-center bg-gray-300 mx-4">
        {#if image}
            <img src="img/{image}" class="px-4 w-full h-40 object-contain bg-gray-300" alt="title" loading="lazy" />
        {/if}
    </div>
    
    <div class="px-4 py-4 flex flex-col h-full  mx-4  mb-4 ml-4 mr-4 justify-between { bgColor ? bgColor :'bg-gray-0'}">
        <h3 class="text-2xl sm:text-xl {titleColor ? titleColor : ' text-gray-500 '} border-b-2 py-2">
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
                        {price.min}&euro;
                </bold> 
                <span class="text-sm text-gray-400">a</span>
                <bold class="text-black font-bold text-md">
                    {price.max}&euro;
                </bold>
            {:else}
                {#if duration}
                    <span class="text-sm text-gray-400">{duration}</span>    
                {/if}    
                {#if price}
                    <bold class="text-black font-bold text-md pr-2">{price}&euro;</bold>
                {/if} 
                
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
    export let titleColor
    export let bgColor
   
    if(price.indexOf && price.indexOf('|') != -1){
        const split = price.split('|')
        price = {
            min : split[0],
            max : split[1]
        }
    }
</script>
