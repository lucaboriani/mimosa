<script context="module">
	export const prerender = true;
</script>
<script>
    import { page } from '$app/stores';
    import Header from '$lib/header/Header.svelte';
    import FaceNeck from '$lib/servizi/FaceNeck.svelte';
    import VisoCollo from '$lib/servizi/VisoCollo.svelte';
</script>
<svelte:head>
	<title>servizi</title>
</svelte:head>
<div id="main-wrap">    
	<Header/>
	<!-- start services -->
	<VisoCollo />
   
	 <!-- end services -->
	<!-- start contacts and cta -->
	<!-- end contacts and cta -->
</div>