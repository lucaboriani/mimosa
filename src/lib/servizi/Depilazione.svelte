
<script>
    import ImageLessCard from '$lib/servizi/ImageLessCard.svelte';
    export let data
</script>
<style>
     .makeup-cont{
        height: calc(100vh - 8.5em);
    }
</style>
<div class="flex flex-col makeup-cont">
    
    <div class="flex flex-wrap bg-gray-200 pt-4">
        {#each data as service}
            <ImageLessCard 
                data={service}
                uiData={{titleColor:'text-gray-300', bgColor: 'bg-white', titleBgColor:'bg-gray-600', width:'lg:w-1/3'}}
            />
        {/each}
    </div>
    
</div>
 
