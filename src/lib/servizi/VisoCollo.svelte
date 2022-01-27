
<script>
    //import { onMount } from "svelte";
    import GroupOneService from '$lib/servizi/GroupOneService.svelte';
    import GroupTwoService from '$lib/servizi/GroupTwoService.svelte';
    import {/* csvStringToArray, formatCsv, */ csvToArray} from '$lib/utils/CSV';

    export let data

    export let serviceGroups = {
        first:[
            

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

    serviceGroups.first = data || []

    /* const csvStringToArray = strData =>
    {
        const objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\\,\\r\\n]*))"),"gi");
        let arrMatches = null, arrData = [[]];
        while (arrMatches = objPattern.exec(strData)){
            if (arrMatches[1].length && arrMatches[1] !== ",")arrData.push([]);
            arrData[arrData.length - 1].push(arrMatches[2] ? 
                arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"") :
                arrMatches[3]);
        }
        return arrData;
    }

    const formatCsv = (array) => {
        const keys = array.shift()
        const rawdata = array.map(entry => {
            const data ={}
            for(let i=0; i< entry.length; i++){
                if(keys[i] && entry[i]){
                    data[keys[i]]=entry[i]
                }
                
            }
            return data
        })
        return rawdata.filter(el => el.title)
    } */

    /* onMount(async function () {
        const response = await fetch('csv/visocollo/first.csv');
        const data = await response.text();
        
        serviceGroups.first = csvToArray(data, '\t').filter(el => el.title)
    }); */
</script>

<div class="flex flex-col">
    <div class="flex flex-wrap">
        {#each serviceGroups.first as service}
            <GroupOneService 
                title="{service.title}"
                paragraphs="{[service.text]}"
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
