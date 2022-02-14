
<script>
    import OneThirdCard from '$lib/servizi/OneThirdCard.svelte';
    export let data

    
</script>
<style>
     .makeup-cont{
        height: calc(100vh - 8.5em);
    }
</style>
<div class="flex flex-col makeup-cont">
    <div class="flex flex-wrap  pt-4">
        {#each data as service}
            <OneThirdCard 
                image={service.image}
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
                titleColor="{'text-gray-500'}"
                bgColor="bg-white"
                titleBgColor="fucsia-color-bg"
            />
        {/each}
    </div>
    
    
</div>
 
