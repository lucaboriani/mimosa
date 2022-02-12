
<script>
    import OneThirdCard from '$lib/servizi/OneThirdCard.svelte';
    import OneFourthCard from '$lib/servizi/OneFourthCard.svelte';
    import HalfWidthCard from '$lib/servizi/HalfWidthCard.svelte';
    export let data
</script>
<style>
    .visocollo-dibi-logo{
        width: 10rem;
        bottom: 5rem;
        right: 3rem;
    }
</style>
<div class="flex flex-col">
    <div class="flex flex-wrap pt-8">
        {#each data[0] as service}
            <OneThirdCard 
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
                bgColor="bg-white"
            />
        {/each}
    </div>
</div>
<div class="flex flex-col relative">
    <div class="text-md  px-4  py-4 my-4  w-full flex justify-between">
        <p class="italic w-2/3 text-gray-600 flex flex-col justify-between">
            <span class="text-2xl text-gray-500">DIBI MILANO</span>
            <span>
                offre risposte mirate ai reali bisogni della tua pelle per proporti la soluzione che cercavi<br>
                e offrirti un momento speciale da dedicare a te stessa
            </span>
     </p>
     </div>
    <div class="flex flex-wrap">
        {#each data[1] as service}
            <OneFourthCard 
                image="{service.image}"
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
                bgColor="bg-white"
            />
        {/each}
    </div>
    <img src="img/logo-dibi-center.png" alt="logo dibi" class="absolute visocollo-dibi-logo" loading="eager" /> 
</div>
<div class="sm:flex flex-wrap px-4">
    <div class="text-md  text-gray-500 pt-9 p-4 bg-white w-full flex justify-between">
        <p class="italic w-2/3 text-gray-500 flex flex-col justify-between">
            <span class="font-semibold block border-b-2">OLOS VISO</span>
            <span>percorso estetico olistico e sensoriale fatto di trattamenti e principi attivi naturali ed efficaci per la bellezza del viso</span>
        </p>
        <img src="img/Logo_Olos Marrone con pay of_preview.png" alt="logo Olos" class="w-40 mb-6" loading="eager" />
    </div>
</div>
{#if data[2]}
    <div class="flex flex-wrap">
        {#each data[2] as service}
            <HalfWidthCard 
                title="{service.title}"
                paragraphs="{[service.text]}"
                price="{service.price}"
                duration="{service.duration}"
            />
        {/each}
    </div>
{/if}
 
