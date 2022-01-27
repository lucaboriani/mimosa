<script context="module">
	//export const prerender = true;
	import { csvToArray } from '$lib/utils/CSV';
	export async function load({ fetch }) {
		

		const response = await fetch('csv/visocollo/first.csv');
		

		if (response.ok) {
			const data = await response.text() 
			return {
					props: { 
					data: csvToArray(data, '\t').filter(el => el.title)
				} 
			}
			
		}
		return {
			status: response.status,
			error: new Error('error loading data')
		}
        
	}
</script>
<script>
    import Header from '$lib/header/Header.svelte';
    import VisoCollo from '$lib/servizi/VisoCollo.svelte';
	import ServiziMenu from '$lib/servizi/ServiziMenu.svelte';
	// document.body.classList.add('no-scroll')
	export let data
</script>
<svelte:head>
	<title>Viso collo e décolleté</title>
</svelte:head>
<style>
	
    .grid-cont{
        height: calc(100vh - 64px);
    }
    :global(.no-scroll) {
        overflow: hidden;
    }
</style>
<div id="main-wrap">    
	<Header/>
	<section class="flex grid-cont">
		<ServiziMenu />
		<div class="flex flex-col w-3/4">
			<h1 class="text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right">
				<span class=" fucsia-color inline">viso collo</span>
				<span class=" inline pl-2">décolleté</span>
			</h1>
			<div class="overflow-y-scroll fucsia-color-bg">
				<VisoCollo data="{data}" />
			</div>
		   
		</div>
	</section>
</div>