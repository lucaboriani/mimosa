<style>
    .contacts-phone{
        width: 1.5em;
    }
</style>
<div class="min-h-screen flex flex-col lg:flex-row w-full  pt-16">
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center"  bind:this={contact}  id="contact-content">
        <h1 class="text-5xl text-black z-10  pb-4 justify-start lg:justify-end w-5/6 flex ">
            <span class="block mimosa-color ">
                <bold><span>la mi</span><span class="text-black">mosa</span></bold>
            </span>
        </h1>
        <div class="flex flex-col lg:flex-row w-5/6  border-b   pb-3 uppercase justify-end">
            <span class="block text-stone-600 z-10 pl-14-em  text-xl">
                Via G. Marconi 13,
            </span>
            <span class="block text-stone-600 z-10 lg:pl-2 text-xl">
                Garbagnate Milanese (MI)
            </span>
        </div>
        <div class="flex flex-col w-5/6    items-center pb-3 mt-3">
            <div class="flex items-center justify-between w-full">
                <img src="img/phone-icons.svg" alt="phone" class="phone w-10 pr-1"/>
                <span class=" pl-3 block uppercase text-xl font-semibold text-stone-600">Per appuntamenti</span>
            </div>
           
            <div class="flex items-center text-black-200 z-10  text-xl font-extrabold  text-center w-full pt-3"  >
               
                <span class="block bg-stone-200  py-2 px-4  leading-8 w-full text-stone-600">Tel 02-99026325</span>
                
            </div>
        </div>
        <div class="flex flex-col w-5/6  border-b justify-between items-center pb-3 mt-3">
            <div class="flex w-full items-center justify-between border-b pb-3">
                <img src="img/clock-1.svg" alt="phone" class="phone pr-1 w-10"/>
                <h3 class="text-xl text-stone-600 uppercase font-semibold">orari</h3>
            </div>
            
            <div class="flex flex-col text-black-200 z-10  text-xl font-extrabold  w-full pt-4" >
                <p class="flex justify-between border-b py-2">
                    <span class="block text-stone-600 z-10   ">
                        martedì - venerdì 
                    </span>
                    <span class="block text-stone-600 z-10  ">
                        09.00 - 19.00
                    </span>
                </p>
                <p class="flex justify-between border-b py-2">
                    <span class="block text-stone-600 z-10  ">
                        sabato
                    </span>
                    <span class="block text-stone-600 z-10  ">
                        09.00 - 17.00
                    </span>
                </p>
                <span class="block text-stone-100 bg-stone-600 z-10 font-semibold text-xl text-center  uppercase p-4 mt-4">
                    riceviamo solo su appuntamento
                </span>
                
            </div>
        </div>
    </div>
    <div class="w-full lg:w-1/2 h-60 lg:h-screen flex flex-col overflow-hidden" id="contact-map" bind:this={map}>
       
    </div>
    
</div>
<script>
    import { onMount } from 'svelte';
    
    import { loadMap } from '$lib/map/index';
    let map
    let contact
    let sdkLoaded = false 
    onMount(async () => {
        if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `0px`;
			
			const observer = new IntersectionObserver(async entries => {
				let intersecting = entries[0].isIntersecting;
				if(intersecting && ! sdkLoaded){
                    await loadMap(map)
                }
				
			}, {
				rootMargin
			});

			observer.observe(contact);
			return () => observer.unobserve(contact);
		}
		
	});
</script>