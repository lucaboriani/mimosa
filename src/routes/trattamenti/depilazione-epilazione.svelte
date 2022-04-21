
<style>
    .cont{
       min-height: calc(100vh - 8.5em);
   }
</style>
<script>
    
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
    import TreatmentContent from '$lib/trattamenti/TreatmentContent.svelte';
    import Footer from '$lib/Footer.svelte';
    
</script>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class="">depilazione</span>
        <span class=" fucsia-color">epilazione</span>
    </TreatmentTitle>
    <TreatmentContent classes="bg-white">
        
        <div class="cont ">
            <h4 class="text-right text-2xl mr-4 mb-4 text-stone-500">epilazione laser</h4>
            <div class="flex flex-col lg:flex-row items-center lg:items-start  w-full  bg-stone-200">
                <img src="../img/APG-Epildream.jpg" alt="apg" loading="lazy" class="w-64 m-4" />
                <div class="flex flex-col w-full p-4 lg:p-0">
                    <h3 class="my-8 font-semibold text-stone-500 pr-4 text-2xl">EPILDREAM</h3>
                    <p class=" text-stone-500 pr-4 border-b pb-4 text-xl">il laser diodo di ultima generazione a alta potenza, veloce, efficace, affidabile e tecnologico</p>
                    <div class="flex flex-col lg:flex-row grow mb-4">
                        <div class="flex flex-col w-full  lg:w-1/2 bg-white lg:mr-2 mb-4 lg:mb-0">
                            <h3 class="p-4 fucsia-color-bg text-center uppercase text-stone-500 text-xl font-semibold">Consulenza gratuita</h3>
    
                            <p class="p-2 flex items-center  grow text-stone-600 text-xl font-semibold justify-center uppercase  p-4">per una epilazione su misura per te!</p>
                        </div>
                        <div class="flex flex-col  w-full  lg:w-1/2 bg-white lg:ml-2 lg:mr-4 mb-4 lg:mb-0">
                            <h3 class="p-4 fucsia-color-bg text-center uppercase text-stone-500 text-xl font-semibold">Si effettuano pacchetti</h3>
    
                            <ul class="m-4 flex flex-col  justify-center grow text-stone-600 text-xl ">
                               <li class="p-2 pl-4 mb-2 flex  bg-stone-100 font-semibold" >Convenienti</li>
                               <li class="p-2 pl-4 mb-2 flex  bg-stone-100 font-semibold" >Rateizzati</li>
                               <li class="p-2 pl-4 flex  bg-stone-100" > <span class="font-semibold pr-2">ZERO</span> interessi</li>
                               
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-between">
                <div class="w-full lg:w-3/5">
                    <h4 class="text-2xl ml-4 mb-4 mt-4 text-stone-500">depliazione</h4>
                    <div class="flex flex-col lg:flex-row  w-full  bg-stone-200 mb-4 p-4">
                        <div class="flex flex-col w-full lg:w-1/2 bg-white mr-2 mb-4 lg:mb-0">
                            <div class="p-4 fucsia-color-bg flex justify-center uppercase text-stone-500 text-2xl">
                                <img src="../img/brasiliana.png" loading="lazy" alt="cera brasiliana" />
                            </div>
        
                            <p class="m-4 flex items-center justify-center grow text-stone-600 text-xl font-semibold">
                                cera brasiliana
                            </p>
                        </div>
                        <div class="flex flex-col w-full lg:w-1/2 bg-white lg:mr-2 mb-4 lg:mb-0">
                            <div class="p-4 fucsia-color-bg flex justify-center uppercase text-stone-500 text-2xl">
                                <img src="../img/ceretta_rullo.png" loading="lazy" alt="cera brasiliana" />
                            </div>
        
                            <p class="m-4 flex items-center justify-center grow text-stone-600 text-xl font-semibold">
                                cera a freddo
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h4 class="text-right text-2xl mr-4 mb-4 mt-4 text-stone-500">elettrocoagulazione</h4>
                    <div class="flex  w-full  p-4 justify-center lg:justify-end">
                        <p class=" p-4 fucsia-color-bg uppercase text-stone-100 text-2xl ">
                            depilazione ad ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </TreatmentContent>
</div>