export const csvStringToArray = strData =>
    {
        const objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\\,\\r\\n]*))"),"gi");
        let arrMatches = null, arrData = [[]];
        // eslint-disable-next-line no-cond-assign
        while (arrMatches = objPattern.exec(strData)){
            if (arrMatches[1].length && arrMatches[1] !== ",")arrData.push([]);
            arrData[arrData.length - 1].push(arrMatches[2] ? 
                arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"") :
                arrMatches[3]);
        }
        return arrData;
    }

    export     function csvToArray(str, delimiter = ",") {

        // slice from start of text to the first \n index
        // use split to create an array from string by delimiter
        const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  
        // slice from \n index + 1 to the end of the text
        // use split to create an array of each csv value row
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  
        // Map the rows
        // split values from each row into an array
        // use headers.reduce to create an object
        // object properties derived from headers:values
        // the object passed as an element of the array
        const arr = rows.map(function (row) {
          const values = row.split(delimiter);
          const el = headers.reduce(function (object, header, index) {
            object[header] = values[index];
            return object;
          }, {});
          return el;
        });
  
        // return the array
        return arr;
      }

export  const formatCsv = (array) => {
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
    }