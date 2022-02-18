<style>
    .contacts-phone{
        width: 1.5em;
    }
</style>
<div class="min-h-screen flex w-full  pt-16">
    <div class="w-1/2 flex flex-col items-center justify-center" id="contact-content">
        <h1 class="text-5xl text-black z-10  pb-4 justify-end w-5/6 flex ">
            <span class="block mimosa-color ">
                <bold><span>la mi</span><span class="text-black">mosa</span></bold>
            </span>
        </h1>
        <div class="flex w-5/6  border-b   pb-3 uppercase justify-end">
            <span class="block text-gray-600 z-10 pl-14-em  text-xl">
                Via G. Marconi 13,
            </span>
            <span class="block text-gray-600 z-10 pl-2 text-xl">
                Garbagnate Milanese (MI)
            </span>
        </div>
        <div class="flex flex-col w-5/6    items-center pb-3 mt-3">
            <div class="flex items-center justify-between w-full">
                <img src="img/phone-icons.svg" alt="phone" class="phone w-10 pr-1"/>
                <span class=" pl-3 block uppercase text-xl font-semibold text-gray-500">Per appuntamenti</span>
            </div>
           
            <div class="flex items-center text-black-200 z-10  text-xl font-extrabold  text-center w-full pt-3"  >
               
                <span class="block bg-gray-200  py-2 px-4  leading-8 w-full text-gray-800">Tel 02-99026325</span>
                
            </div>
        </div>
        <div class="flex flex-col w-5/6  border-b justify-between items-center pb-3 mt-3">
            <div class="flex w-full items-center justify-between border-b pb-3">
                <img src="img/clock-1.svg" alt="phone" class="phone pr-1 w-10"/>
                <h3 class="text-xl text-gray-500 uppercase font-semibold">orari</h3>
            </div>
            
            <div class="flex flex-col text-black-200 z-10  text-xl font-extrabold  w-full pt-4" >
                <p class="flex justify-between border-b py-2">
                    <span class="block text-gray-800 z-10   ">
                        martedì - venerdì 
                    </span>
                    <span class="block text-gray-500 z-10  ">
                        09.00 - 19.00
                    </span>
                </p>
                <p class="flex justify-between border-b py-2">
                    <span class="block text-gray-800 z-10  ">
                        sabato
                    </span>
                    <span class="block text-gray-500 z-10  ">
                        09.00 - 17.00
                    </span>
                </p>
                <span class="block text-gray-600 z-10 font-semibold text-xl text-right  uppercase pt-4">
                    riceviamo solo su appuntamento
                </span>
                
            </div>
        </div>
    </div>
    <div class="w-1/2 flex flex-col overflow-hidden" id="contact-map" bind:this={map}>
       
    </div>
    
</div>
<script>
    import { onMount } from 'svelte';
    
    import { loadMap } from '$lib/map/index';
    let map
    onMount(async () => {
		await loadMap(map)
	});
</script>