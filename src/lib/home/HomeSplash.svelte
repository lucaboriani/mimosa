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
		margin-left: 10em;
	}
	.home-logo {
		width: 20%;
		height: auto;
		bottom: 6em;
		left: 75%;
		transform: translateX(10%);
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
            <div class="home-address">
                <span class="block text-black-200 z-10 pl-14-em text-sm">
                    Via G. Marconi, 13 - Garbagnate Milanese (MI)
                </span>
                <a class="block text-black-200 z-10 pl-14-em text-sm font-extrabold phone" href="#">
                    Tel 02-99026325
                </a>
                <div class="lg:mt-0 lg:flex-shrink-0 z-10 pl-11-em">
                    <div class="mt-4 ml-6 inline-flex rounded-md shadow">
                        <button on:click="{goToAbout}"  type="button" class="py-4 px-6  bg-black hover:fucsia-color-bg hover:text-white focus:ring-black text-gray-100 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Scopri di pi&ugrave;
                        </button>
                    </div>
                </div> 

            </div>
            
        </div>
    
    </div>
    <img src="img/lei.png" alt="donna"  class="absolute inset-y-0 h-screen" loading="eager" id="home-image" />
    <img src="img/logo-dibi-center.png" alt="logo dibi" class="absolute home-logo" loading="eager" /> 
</div>
<script>
	
	function goToAbout() {
		let about = document.getElementById('about')
		about.scrollIntoView({behavior: "smooth"})
	}
</script>
