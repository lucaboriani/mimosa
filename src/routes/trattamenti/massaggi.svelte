<script context="module">
	//export const prerender = true;
	let urls = [
		'../json/massaggi.json',
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
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
    import TreatmentContent from '$lib/trattamenti/TreatmentContent.svelte';
	import Footer from '$lib/Footer.svelte';
	export let data
   
</script>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class=" fucsia-color inline">massaggi</span>
    </TreatmentTitle>
    <TreatmentContent classes=" bg-stone-200">
        <div class="flex flex-col cont bg-stone-200">
            <div class="flex flex-wrap  pt-4">
                {#each data as service}
                    <ServiceCard 
						data={service}
						uiData={{
							imageBg:'fucsia-color-bg', 
							titleColor:'text-stone-500', 
							bgColor: 'bg-white', 
							titleBgColor:'fucsia-color-bg', 
							width:'lg:w-1/3'
						}}
					/>
                {/each}
            </div>
            
            
         </div>
		 <Footer></Footer>
    </TreatmentContent>
</div>
<style>
  .cont{
        min-height: calc(100vh - 64px);
    }
    :global(.no-scroll) {
        overflow: hidden;
    }
</style>
