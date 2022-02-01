
<script>
    import OneThirdCard from '$lib/servizi/OneThirdCard.svelte';
    export let data

    
</script>
<style>
</style>
<div class="flex flex-col">
    <div class="flex flex-wrap bg-gray-500">
        {#each data as service}
            <OneThirdCard 
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
                titleColor="{'text-gray-500'}"
                bgColor="fucsia-color-bg"
            />
        {/each}
    </div>
</div>
 
