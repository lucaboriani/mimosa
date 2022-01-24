<style>
    .grid-cont{
        height: calc(100vh - 64px);
    }
    .service-menu{
        padding-top: 4.5rem;
    }
</style>
<script>
    import GroupOneService from '$lib/servizi/GroupOneService.svelte';
    import GroupTwoService from '$lib/servizi/GroupTwoService.svelte';
    let serviceGroups = {
        first:[
            {
                title:'Analisi computerizzata viso',
                paragraphs:[],
                duration:'',
                price: 50
            },
            {
                title:'Pulizia viso',
                paragraphs:[
                    'con depilazione ciglia e baffetti'
                ],
                duration: '1 ora e 30 min',
                price: 30
            },
            {
                title:'Trattamenti flash',
                paragraphs:[
                ],
                duration: '1 ora ',
                price: 30
            },
            {
                title:'LPG viso',
                paragraphs:[
                    'riposiziona i volumi del viso'
                ],
                duration: '1 ora ',
                price: 70
            },
            {
                title:'K.R.F.',
                paragraphs:[
                    'azione termica rassodante'
                ],
                duration: '',
                price: {
                    min:35,
                    max:70
                }
            },
            {
                title:'Dermopeeling',
                paragraphs:[
                    'microdermoabrasione cosmetica'
                ],
                duration: '1 ora ',
                price: 48
            },

        ],
        second:[
            {
                title:'The mini spa treatment',
                paragraphs:[
                    `Offre alla pelle grandi vantaggi in pochissimo tempo
                            lasciando una sensazione di freschezza<br>
                            donando effetti rivitalizzanti con un accento sull'esfoliazione e l'idratazione`
                ],
                duration: '30 min',
                price: 49
            },
            {
                title:'High definition peel',
                paragraphs:[
                    ` Intensivo trattamento peel mensile consente straordinari miglioramenti anti-aging con risultati visibili.<br>
                        Esfolia profondamente, riempie e volumizza l'aspetto della pelle lasciando la cute radiosa e levigata
                       `
                ],
                duration: '30 min',
                price: 150
            },
        ],
        third:[
            
        ]
    }
</script>
<section class="flex grid-cont">
    <nav class="w-1/4 bg-gray-400 service-menu px-4">
        <ul class="flex w-full flex-col">
            <li class="mb-2">
                <a class="fucsia-color-bg p-2 flex  border border-gray-700" href="/visocollo">
                    <span class="text-blacl">viso collo</span>
                    <span class=" inline pl-2 text-white">décolleté</span>
                    
                </a>
            </li>
            <li class="mb-2">
                <a href="#a" class="bg-gray-300 flex p-2 border border-gray-100">
                    <span class=" text-black">trattamenti</span>
                    <span class=" pl-2 fucsia-color ">corpo</span>
                </a>
            </li>
            <li class=" border mb-2">
                <a href="#a" class="bg-gray-300 flex p-2 border border-gray-100">
                    epilazione
                </a>
            </li>
            <li class="mb-2">
                <a href="#a" class="bg-gray-300 flex p-2 border border-gray-100">
                    <span class="">manicure</span>
                    <span class="fucsia-color pl-2">pedicure</span>
                      
                </a>
            </li>
            <li class="mb-2">
                <a href="#a" class="bg-gray-300 flex p-2 border border-gray-100">
                    massaggi
                </a>
            </li>
            <li class="mb-2 ">
                <a href="#a" class="bg-gray-300 flex p-2 border border-gray-100">
                    
                        <span class="">make</span>
                        <span class=" fucsia-color">up</span>
                    
                        
                    
                 </a>
            </li>
            
        </ul>    
    </nav>
    <div class="flex flex-col w-3/4">
        <h1 class="text-gray-510 mr-8 mt-4 mb-4 text-4xl text-right">
            <span class=" fucsia-color inline">viso collo</span>
            <span class=" inline pl-2">décolleté</span>
        </h1>
        <div class="overflow-y-scroll fucsia-color-bg">
            <div class="flex flex-col">
                <div class="flex flex-wrap">
                    {#each serviceGroups.first as service}
                        <GroupOneService 
                            title="{service.title}"
                            paragraphs="{service.paragraphs}"
                            price="{service.price}"
                            duration="{service.duration}"
                        />
                    {/each}
                </div>
                
            </div>
            <div class="sm:flex flex-wrap px-4">
                
                <div class="text-md  text-gray-500 pt-9 p-4 bg-white w-full flex justify-between">
                    
                    
                    
                    <p class="italic w-2/3 text-gray-500 flex flex-col justify-between">
                        <span class="font-semibold block border-b-2">OLOS VISO</span>
                        <span>percorso estetico olistico e sensoriale fatto di trattamenti e principi attivi naturali ed efficaci per la bellezza del viso</span>
                    </p>
                    <img src="img/Logo_Olos Marrone con pay of_preview.png" alt="logo Olos" class="w-40 mb-6" loading="eager" />
                    
                </div>
                
                
            </div>
            <div class="flex flex-wrap">
                {#each serviceGroups.second as service}
                        <GroupTwoService 
                            title="{service.title}"
                            paragraphs="{service.paragraphs}"
                            price="{service.price}"
                            duration="{service.duration}"
                        />
                    {/each}
               
                
            </div> 
            
        </div>
       
    </div>

</section>