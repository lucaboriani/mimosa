<script>
    import HomeSpecialties from '$lib/home/HomeSpecialties.svelte';
    import HomeChiSiamo from '$lib/home/HomeChiSiamo.svelte';
    import Contacts from '$lib/home/Contacts.svelte';
	let about, contacts, specialties
</script>
<style>
    .about-stripes {
		background: linear-gradient(90deg, #d4d4d4 25%, #ffffff 25% 100%);
	}
    @media screen and (max-width: 768px) {
        .about-stripes {
            background: white;
        }
    }
</style>
<div class="about-stripes min-h-screen pb-8 border-b" bind:this={about} id="about">
    <div class="flex flex-wrap justify-end">
    	<HomeChiSiamo/>
    </div>
</div>
<div class="" id="specialties" bind:this={specialties}>
    <div class="flex flex-col lg:flex-row">
    	<HomeSpecialties/>
    </div>
</div>
<div class="" bind:this={contacts} id="contacts">
    <div class="flex">
    	<Contacts/>
    </div>
</div>