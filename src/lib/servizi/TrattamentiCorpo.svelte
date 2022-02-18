
<script>
    import ServiceCard from '$lib/servizi/ServiceCard.svelte';
    export let data

    export let lpg = data.filter(el => el.section === "LPG ENDERMOLOGIE CORPO")
    export let dibi = data.filter(el => el.section === "dibi body")
</script>
<style>
</style>
<div class="flex flex-col">
    <div class="flex flex-wrap bg-gray-300 p-4 pt-8">
        {#each lpg as service}
        <ServiceCard 
            data={service}
            uiData={{imageBg:'fucsia-color-bg', titleColor:'text-gray-500', bgColor: 'bg-gray-100', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
        />
        {/each}
        <span class="text-xl w-1/3 ml-auto text-gray-600 mt-4 px-4 font-semibold">LPG ENDERMOLOGIE CORPO</span>
    </div>
    <div class="flex pt-4 bg-white">
        <span class="text-xl text-gray-600  mt-4 px-4 font-semibold w-1/6">DIBI BODY</span>
        <div class="flex flex-wrap w-full">
            {#each dibi as service}
                <ServiceCard 
                    data={service}
                    uiData={{imageBg:'fucsia-color-bg', titleColor:'text-gray-500', bgColor: 'bg-gray-100', titleBgColor:'fucsia-color-bg', width:'lg:w-1/3'}}
                />
                
            {/each}
        </div>
    </div>
    
</div>
 
