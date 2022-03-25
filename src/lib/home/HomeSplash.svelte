<style>
	.mimosa-color{
		color:#c6919b;
	}
	.phone:hover{
		color:whitesmoke;
	}

	.home-stripes {
		background: linear-gradient(90deg, #fff 25%, #c6919b 25% 50% , #efefef 50% 75%, #d4d4d4 75% 100%);
	}
	.home-mimosa{
		position: absolute;
		text-align: left;
		left: 25%;
		transform: translate3d(-12.9rem,0, 0);
	}
	#home-image {
		left:55%;   
	}
	.home-address{
		position: absolute;
		left:0;
		bottom: 6em;
		width: 50%;
	}
	.home-logo {
		width: 12em;
		height: auto;
		bottom: 4em;
		left: 87.5%;
		transform: translateX(-50%);
	}
	
	
	
	.scroll {
		width: 34px;
		height: 34px;
		border: 2px solid #333;
		border-radius: 34px;
		position: absolute;
		bottom: 1em;
		margin: 0;
		left: 50%;
		transform:translateX(-50%);
		animation: down 1.5s infinite;
		-webkit-animation: down 1.5s infinite;
		cursor: pointer;
	}
	.scroll::before {
		content: '';
		position: absolute;
		top: 7px;
		left: 8px;
		width: 13px;
		height: 13px;
		border-left: 2px solid #333;
		border-bottom: 2px solid #333;
		transform: rotate(-45deg);
	}

	@keyframes down {
		0% {
			transform: translate(-50%,0);
		}
		20% {
			transform: translate(-50%,15px);
		}
		40% {
			transform: translate(-50%,0);
		}
	}
	.phone {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	
	.home-button {
		cursor: pointer;

	}
	.home-button a {
		/* display: none; */
		opacity: 0;
		transition: all .3s ease-in-out;
		pointer-events: none;
		width: 12em;
    	left: -1em;
	}
	.home-button:hover a {
		cursor: pointer;
		display: block;
		opacity: 1;
		pointer-events: all;
	}
	#orari{
		width: 16em;
    	left: -4em;
	}
	#location {
    	left: -4.4em
	}
	
</style>
<script>
	import { onMount } from 'svelte';
	import {bgWhiteMenu} from '$lib/states'
	let splash 
	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `0px`;
			
			const observer = new IntersectionObserver(entries => {
				let intersecting = entries[0].isIntersecting;
				
				bgWhiteMenu.set(!intersecting)
				
			}, {
				rootMargin
			});

			observer.observe(splash);
			return () => observer.unobserve(splash);
		}
	});

	function goToAbout() {
		let about = document.getElementById('about')
		about.scrollIntoView({behavior: "smooth"})
	}

	
</script>
<div class="bg-white relative" bind:this={splash} id="splash">
    <div class="h-screen flex flex-col text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-19 justify-center home-stripes">
        <div class="home-mimosa">
            <h1 class="text-8xl text-black z-10 pl-4-em">
				<span class="block text-6xl text-gray-200 translate-x-1/2 relative -left-3">estetica</span>
                <span class="block mimosa-color">
                    <bold><span>la mi</span><span class="text-black">mosa</span></bold>
                </span>
            </h1>
			<div class=" pl-4 pb-4 translate-x-48 "  >
				<span class="block text-black z-10 pl-14-em  text-2xl">
					Via G. Marconi 13
				</span>
				<span class="block text-black z-10 pl-14-em font-bold text-2xl">
					Garbagnate Milanese (MI)
				</span>
			</div>
			<div class="flex mt-1 w-32 justify-between translate-x-56">
				<div class="relative home-button">
					<img src="img/phone-icons.svg" alt="phone" class="phone pr-1"/>
					<a class="flex flex-col text-black-200 z-10  text-sm font-extrabold absolute pt-6 text-center" href="#" >
						<span class="w-full pl-3 block uppercase">Per appuntamenti</span>
						<span class=" ml-2 block bg-gray-300  py-1  leading-8">Tel 02-99026325</span>
						
					</a>
				</div>
				<div class="relative home-button">
					<img src="img/locator-icon.png" alt="phone" class="phone pr-1"/>
					<a class="flex flex-col text-black-200 z-10  text-sm font-extrabold absolute pt-6 text-center" href="#" id="location" >
						<span class="w-full pl-3 block ">Per raggiungerci</span>
						<span class=" ml-2 block bg-gray-300  py-1  leading-8 uppercase pt-2"> mappa</span>
						
					</a>
					
				</div>
				<div class="relative home-button">
					<img src="img/clock-1.svg" alt="phone" class="phone pr-1"/>
					<a class="flex flex-col text-black-200 z-10  text-sm font-extrabold absolute w-80 pt-4" href="#" id="orari" >
						<p class="flex justify-between border-b py-2">
							<span class="block text-gray-800 z-10  text-sm ">
								martedì - venerdì 
							</span>
							<span class="block text-black-200 z-10  text-sm">
								09.00 - 19.00
							</span>
						</p>
						<p class="flex justify-between border-b py-2">
							<span class="block text-gray-800 z-10  text-sm">
								sabato
							</span>
							<span class="block text-black-200 z-10  text-sm">
								09.00 - 17.00
							</span>
						</p>
						<span class="block text-black-200 z-10 font-semibold text-sm text-right  uppercase pt-4">
							solo su appuntamento
						</span>
						
					</a>
				</div>
				
				
			</div>
        </div>
		
    </div>
	<div class="scroll bg-gray-100"  on:click="{goToAbout}"></div>
    <img src="img/lei.png" alt="donna"  class="absolute inset-y-0 h-screen" loading="eager" id="home-image" />
    <img src="img/logo-dibi-center.png" alt="logo dibi" class="absolute home-logo" loading="eager" /> 
</div>

