
<style>
    .cont{
       min-height: calc(100vh - 8.5em);
   }
</style>
<script>
    
    import TreatmentTitle from '$lib/trattamenti/TreatmentTitle.svelte';
    import TreatmentContent from '$lib/trattamenti/TreatmentContent.svelte';

    
</script>
<div class="flex flex-col w-full md:w-3/4">
    <TreatmentTitle>
        <span class="">depilazione</span>
        <span class=" fucsia-color">epilazione</span>
    </TreatmentTitle>
    <TreatmentContent classes="bg-white">
        
        <div class="cont ">
            <h4 class="text-right text-2xl mr-4 mb-4 text-gray-400">epilazione laser</h4>
            <div class="flex  w-full  bg-gray-200">
                <img src="../img/APG-Epildream.jpg" alt="apg" loading="lazy" class="w-64 m-4" />
                <div class="flex flex-col w-full ">
                    <h3 class="my-8 font-semibold text-gray-500 pr-4">EPILDREAM</h3>
                    <p class=" text-gray-500 pr-4 border-b pb-4">il laser diodo di ultima generazione a alta potenza, veloce, efficace, affidabile e tecnologico</p>
                    <div class="flex grow mb-4">
                        <div class="flex flex-col  w-1/2 bg-white mr-2">
                            <h3 class="p-4 fucsia-color-bg text-center uppercase text-gray-500 text-2xl">Richiedi una consulenza gratuita</h3>
    
                            <p class="m-4 flex items-center  grow text-gray-600 text-xl font-semibold">per una epilazione su misura per te!</p>
                        </div>
                        <div class="flex flex-col  w-1/2 bg-white ml-2 mr-4">
                            <h3 class="p-4 fucsia-color-bg text-center uppercase text-gray-500 text-2xl">Si effettuano pacchetti</h3>
    
                            <ul class="m-4 flex flex-col  justify-center grow text-gray-600 text-xl font-semibold">
                               <li>Convenienti</li>
                               <li>Rateizzati</li>
                               <li> <span class="font-semibold">ZERO</span> interessi</li>
                               
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="text-right text-2xl mr-4 mb-4 mt-4 text-gray-400">depliazione</h4>
            <div class="flex  w-full  bg-gray-200 mb-4 p-4">
                <div class="flex flex-col  w-1/2 bg-white mr-2">
                    <div class="p-4 fucsia-color-bg flex justify-center uppercase text-gray-500 text-2xl">
                        <img src="../img/brasiliana.png" loading="lazy" alt="cera brasiliana" />
                    </div>

                    <p class="m-4 flex items-center justify-center grow text-gray-600 text-xl font-semibold">
                        cera brasiliana
                    </p>
                </div>
                <div class="flex flex-col  w-1/2 bg-white ml-2">
                    <div class="p-4 fucsia-color-bg flex justify-center uppercase text-gray-500 text-2xl">
                        <img src="../img/ceretta_rullo.png" loading="lazy" alt="cera brasiliana" />
                    </div>

                    <p class="m-4 flex items-center justify-center grow text-gray-600 text-xl font-semibold">
                        cera a freddo
                    </p>
                </div>
            </div>
            <h4 class="text-right text-2xl mr-4 mb-4 mt-4 text-gray-400">elettrocoagulazione</h4>
            <div class="flex  w-full  bg-gray-200  p-4 justify-end">
                <p class=" p-4 fucsia-color-bg uppercase text-gray-500 text-2xl ">
                    depilazione ad ago
                </p>
            </div>
        </div>
    </TreatmentContent>
</div>