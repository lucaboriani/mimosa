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
		transform: translate3d(-9.7rem,0, 0);
	}
	#home-image {
		left:55%;   
	}
	.home-address{
		position: absolute;
		left:0;
		bottom: 0;
		width: 50%;
	}
	.home-logo {
		width: 15%;
		height: auto;
		bottom: 4em;
		left: 80%;
		transform: translateX(10%);
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
	}
</style>
<div class="bg-white relative">
    <div class="h-screen flex flex-col text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-19 justify-center home-stripes">
        <div class="home-mimosa">
            <h1 class="text-7xl text-black z-10 pl-4-em">
                <span class="block mimosa-color">
                    <bold><span>la mi</span><span class="text-black">mosa</span></bold>
                </span>
            </h1>
            
        </div>
		<div class="home-address flex flex-col text-left">
			<div class=" pl-4 pb-4" >
				<span class="block text-gray-500 z-10 pl-14-em text-sm">
					Via G. Marconi 13
				</span>
				<span class="block text-black-200 z-10 pl-14-em text-sm">
					Garbagnate Milanese (MI)
				</span>
			</div>
			<div class="w-full flex">
				<div class="w-1/2  p-4 fucsia-color-bg">
					<p class="flex justify-between">
						<span class="block text-gray-200 z-10  text-sm ">
							martedì - venerdì 
						</span>
						<span class="block text-black-200 z-10  text-sm">
							09.00 - 19.00
						</span>
					</p>
					<p class="flex justify-between">
						<span class="block text-gray-200 z-10  text-sm">
							sabato
						</span>
						<span class="block text-black-200 z-10  text-sm">
							09.00 - 17.00
						</span>
					</p>
					<span class="block text-black-200 z-10 font-semibold text-sm text-right pt-2 ">
						solo su appuntamento
					</span>
					
				</div>
				<div class="w-1/2  p-8 bg-white">
					<a class="flex flex-col text-black-200 z-10  text-sm font-extrabold " href="#">
						<span class="w-full pl-1 block">fissa un appuntamento</span>
						<div class="flex">
							<img src="img/phone-icons.svg" alt="phone" class="phone pr-1"/>
							<span class="w-full pl-1 block bg-gray-300 p2 text-center leading-8">Tel 02-99026325</span>
						</div>
						
					</a>
				</div>
			</div>
			
			
			

		</div>
    </div>
	<div class="scroll bg-gray-100"  on:click="{goToAbout}"></div>
    <img src="img/lei.png" alt="donna"  class="absolute inset-y-0 h-screen" loading="eager" id="home-image" />
    <img src="img/logo-dibi-center.png" alt="logo dibi" class="absolute home-logo" loading="eager" /> 
</div>
<script>
	
	function goToAbout() {
		let about = document.getElementById('about')
		about.scrollIntoView({behavior: "smooth"})
	}
</script>
