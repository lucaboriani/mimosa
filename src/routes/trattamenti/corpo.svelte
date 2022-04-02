<script context="module">


	let urls = [
		'../json/trattamenticorpo.json',
	]


	export async function load({ fetch }) {
		
		const fetchUrl = async (url) => {
			const response = await fetch(url);
			const data = await response.json() 
			return data
		}

		try {
			
			const multiple = await Promise.all(urls.map(url => fetchUrl(url)))
			
			return {
					props: { 
					data: multiple[0]
				}
			} 
		} catch (error) {
			return {
				status: '400',
				error: new Error('error loading data')
			}
		}
        
	}
</script>
<script>
    import ServiceCard from '$lib/servizi/ServiceCard.svelte';
    import HorizontalCard from '$lib/servizi/HorizontalCard.svelte';
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
    import TreatmentContent from '$lib/trattamenti/TreatmentContent.svelte';
    import Footer from '$lib/Footer.svelte';
	export let data
    export let lpg = data.filter(el => el.section === "LPG ENDERMOLOGIE CORPO")
    export let dibi = data.filter(el => el.section === "dibi body")
</script>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class=" fucsia-color inline">trattamenti</span>
        <span class=" inline pl-2">corpo</span>
    </TreatmentTitle>
    <TreatmentContent>
        <div class="flex flex-col">
            <p class="text-stone-500 text-left lg:text-right pl-4 pr-4 pb-4 text-xl">
                Per una bellezza speciale un trattamento completo, mirato e selettivo<br>
                in base al tuo profilo, alle tue caratteristiche ed al tuo stile di vita
            </p>
            <div class="flex flex-wrap bg-stone-100 p-4 m-4">
                {#each lpg as service}
                <HorizontalCard 
                    data={service}
                    uiData={{
                        imageBg:'fucsia-color-bg', 
                        titleColor:'text-stone-800 font-bold', 
                        bgColor: 'bg-stone-100', 
                        titleBgColor:'fucsia-color-bg', 
                        width:'lg:w-full'
                    }}
                />
                {/each}
             </div>
            <div class="flex flex-col pt-4 bg-white">
                <span class="text-xl text-stone-600  mb-4 px-4 font-semibold w-1/6">DIBI BODY</span>
                <div class="flex flex-wrap w-full">
                    {#each dibi as service}
                        <ServiceCard 
                            data={service}
                            uiData={{imageBg:'fucsia-color-bg', titleColor:'text-stone-500', bgColor: 'bg-stone-100', titleBgColor:'fucsia-color-bg', width:'lg:w-1/4'}}
                        />
                        
                    {/each}
                </div>
            </div>
            
        </div>
        <Footer></Footer>
    </TreatmentContent>
</div>