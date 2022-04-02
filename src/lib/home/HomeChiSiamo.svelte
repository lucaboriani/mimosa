<style>
    .mimosa-color{
		color:#c6919b;
	}
    .about-title{
        transform: translateX(-4.7em);
    }
    @media screen and (max-width: 768px) {
        .about-title{
            transform: translateX(0);
        } 
    }
</style>
<div class="w-full md:w-3/4   ml-1/4">
    <div class="my-12 px-8 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
        <h1 class="pl-4 text-5xl text-black z-10 pl-4-em flex flex-col lg:flex-row items-baseline">
            <span class="text-stone-600">estetica</span>
            <span class="mimosa-color lg:pl-4 text-6xl">
                <bold><span>la mi</span><span class="text-black">mosa</span></bold>
            </span>
        </h1>
        <h2 class="mb-4 text-stone-600 italic font-semibold text-xl lg:text-4xl mt-4 pl-4">
            Insieme a voi da più di 30 anni
        </h2>
        <p class="mb-6 leading-loose text-stone-600 pl-4 text-base font-light">
            Senza mai tralasciare la <span class="font-bold text-stone-800">costante formazione</span> tecnico scientifica<br>
            che ci ha permesso di offrirti <span class="font-bold text-stone-800">splendidi risultati.</span>
        </p>

        <h2 class="my-4 text-stone-600 italic  text-xl lg:text-2xl font-heading pl-4">
            Al nostro fianco i pi&ugrave; prestigiosi partner nel mondo dell' estetica:
        </h2>
        <ul class="p-4 mt-8  flex flex-col lg:flex-row my-8 py-12 fucsia-color-bg">
            <li class="w-full lg:w-1/3 p-4 fucsia-color-bg">
                <div class="flex flex-col bg-white h-full pb-4">
                    <div class="p-4 pt-8 bg-stone-200">
                        <img src="img/dibi.png" alt="logo Dibi" loading="lazy" class="flex w-28 h-28 mx-auto items-center justify-center object-contain"/>
                            
                    </div>
                    <div class="px-4">
                        <h3 class="mt-4 text-xl text-stone-700 border-b border-stone-700 pb-4">
                            DIBI Milano
                        </h3>
                        <p class="text-stone-600 pt-8 italic">
                            Risposte mirate ai reali bisogni della tua pelle.
                        </p>
                    </div>
                </div>
                
            </li>
            <li class="w-full lg:w-1/3 p-4 fucsia-color-bg">
                <div class="flex flex-col bg-white h-full pb-4">
                    <div class="p-4 pt-8 bg-stone-200">
                        <img src="img/lpg.png" alt="logo LPG" loading="lazy" class="flex w-28 h-28 mx-auto items-center justify-center object-contain"/>
                            
                    </div>
                    <div class="px-4">
                        <h3 class="mt-4 text-xl  text-stone-700 border-b border-stone-700 pb-4">
                            LPG Endermologie
                        </h3>
                        <p class="text-stone-600 pt-8 italic">
                            Riattiva l’attività cellulare assopita della pelle, combattendo ogni inestetismo (elimina le adiposità, leviga la cellulite, rassoda la pelle...)
                            in modo <bold class="font-semibold">naturale e senza dolore</bold>.
                        </p>
                    </div>
                </div>
                
            </li>
            <li class="w-full lg:w-1/3 flex  flex-col p-4  fucsia-color-bg">
                <div class="flex flex-col bg-white h-full pb-4">
                    <div class="p-4 pt-8 bg-stone-200">
                        <img src="img/logo-stackedok.png" alt="logo priori stacked" loading="lazy" class="flex w-28 h-28 mx-auto items-center justify-center object-contain"/>
                        
                    </div>
                    <div class="px-4">
                        <h3 class="mt-4 text-xl  text-stone-700 border-b border-stone-700 pb-4">
                            Priori
                        </h3>
                        <p class="text-stone-600 pt-8 italic">
                            Arricchita di principi attivi della biotecnologia più avanzata, le formule Priori Adaptive Superceutical agiscono per offrirti, in tempo reale, i benefici correttivi visibili di cui hai bisogno.
                            La tua pelle sfrutterà di ogni formula solo i complessi necessari, quando necessario, per rivelare una pelle più luminosa e idratata. 
                        </p>
                    </div>
                </div>
                
            </li>
        </ul>
        <div class="flex flex-col lg:flex-row">
            <a on:click="{gotoSpecialties}" class="w-full lg:w-1/2 text-2xl mr-2 flex justify-center p-4 fucsia-color-bg hover:bg-black  text-white uppercase transition ease-in-out delay-150" href="">
                Scopri di più
            </a>
            <a class="w-full lg:w-1/2 text-2xl mt-4 lg:mt-0 lg:ml-2  flex justify-center p-4 fucsia-color-bg hover:bg-black  text-white uppercase transition ease-in-out delay-150" href="/trattamenti">
                i nostri trattamenti
            </a>
        </div>
        
        
    </div>
</div>
<script>
    let specialties
   
	function gotoSpecialties(e) {
       specialties = document.getElementById('specialties')
        const rect = specialties.getBoundingClientRect()

        //window.scrollTo(0, rect.top + rect.height)
		specialties.scrollIntoView({behavior: "smooth"})
	}
</script>
