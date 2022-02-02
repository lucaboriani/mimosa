
<script>
    import NoImageCard from '$lib/servizi/NoImageCard.svelte';
    export let data

    
</script>
<style>
     .makeup-cont{
        height: calc(100vh - 8.5em);
    }
</style>
<div class="flex flex-col makeup-cont">
    <div class="flex flex-wrap bg-gray-500 h-full">
        {#each data as service}
            <NoImageCard 
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
                titleColor="{'text-gray-500'}"
                bgColor="bg-gray-300"
                titleBgColor="fucsia-color-bg"
            />
        {/each}
    </div>
</div>
 
