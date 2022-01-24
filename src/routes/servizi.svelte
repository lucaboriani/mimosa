<script context="module">
	//export const prerender = true;
</script>
<script>
    import { page } from '$app/stores';
    import Header from '$lib/header/Header.svelte';
    import Splash from '$lib/servizi/Splash.svelte';
    import FaceNeck from '$lib/servizi/FaceNeck.svelte';
    document.body.classList.add('no-scroll')
</script>
<style>
	
	:global(.no-scroll) {
        overflow: hidden;
    }
</style>
<svelte:head>
	<title>servizi</title>
</svelte:head>
<div id="main-wrap">    
	<Header/>
	<Splash />
	<!-- start services -->
	<!-- <FaceNeck /> -->
	<FaceNeck /> -->
   
	 <!-- end services -->
	<!-- start contacts and cta -->
	<!-- end contacts and cta -->
</div>