<script>
    import HomeAboutCards from '$lib/home/HomeAboutCards.svelte';
    import HomeSpecialties from '$lib/home/HomeSpecialties.svelte';
    import HomeChiSiamo from '$lib/home/HomeChiSiamo.svelte';
	let about
</script>
<style>
    .about-stripes {
		background: linear-gradient(90deg, #d4d4d4 25%, #ffffff 25% 100%);
	}
</style>
<div class="about-stripes min-h-screen pb-8 border-b" bind:this={about} id="about">
    <div class="flex flex-wrap justify-end">
    	<HomeChiSiamo/>
    </div>
</div>
<div class="" id="about-specialties">
    <div class="flex">
    	<HomeSpecialties/>
    </div>
</div>