
<script>
    import OneThirdCard from '$lib/servizi/OneThirdCard.svelte';
    export let data

    export let lpg = data.filter(el => el.section === "LPG ENDERMOLOGIE CORPO")
    export let dibi = data.filter(el => el.section === "dibi body")
</script>
<style>
</style>
<div class="flex flex-col">
    <div class="flex flex-wrap bg-gray-300">
        {#each lpg as service}
            <OneThirdCard 
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
                titleColor="{'fucsia-color'}"
            />
        {/each}
        <span class="text-xl ml-auto text-gray-600 mt-4 px-4 font-semibold">LPG ENDERMOLOGIE CORPO</span>
    </div>
    <div class="flex">
        <span class="text-xl text-gray-600  mt-4 px-4 font-semibold w-1/6">DIBI BODY</span>
        <div class="flex flex-wrap w-full">
            {#each dibi as service}
                <OneThirdCard 
                    title="{service.title}"
                    paragraphs="{[service.text]}"
                    price="{service.price}"
                    duration="{service.duration}"
                    titleColor="{'fucsia-color'}"
                />
            {/each}
        </div>
    </div>
    
</div>
 
