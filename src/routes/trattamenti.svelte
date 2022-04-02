<script context="module">
	//export const prerender = true;
</script>
<script>
    import { page } from '$app/stores';
    import Header from '$lib/header/Header.svelte';
    import Splash from '$lib/servizi/Splash.svelte';
    import FaceNeck from '$lib/servizi/FaceNeck.svelte';
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
</script>
<style>
	
	:global(.no-scroll) {
        overflow: hidden;
    }
</style>
<svelte:head>
	<title>I nostri servizi</title>
</svelte:head>
<div id="main-wrap">    
	<Header/>
    <TreatmentTitle>
        <span class="text-stone-500">trattamenti</span>
    </TreatmentTitle>
	<Splash />
	<!-- start services -->
	
</div>