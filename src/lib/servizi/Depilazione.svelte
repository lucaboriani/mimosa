
<script>
    import ServiceCard from '$lib/servizi/ServiceCard.svelte';
    export let data
</script>
<style>
     .makeup-cont{
        height: calc(100vh - 8.5em);
    }
</style>
<div class="flex flex-col makeup-cont">
    
    <div class="flex flex-wrap bg-gray-500 pt-4">
        {#each data as service}
            <ServiceCard 
                data={service}
                uiData={{titleColor:'text-gray-500', bgColor: 'bg-white', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
            />
        {/each}
    </div>
    
</div>
 
