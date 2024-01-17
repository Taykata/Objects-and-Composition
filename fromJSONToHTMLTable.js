function fromJSONToHTMLTable(input){

    let result = '';
    
    let arrOfObj = JSON.parse(input);
    let headers = Object.keys(arrOfObj[0]);

    result += '<table>\n';
    result += '   <tr>';

    for (let i = 0; i < headers.length; i++) {
        result += `<th>${headers[i]}</th>`;
    }

    result += '</tr>\n';

    for (let obj of arrOfObj) {
        result += '   <tr>';
        let values = Object.values(obj);
        for (let j = 0; j < values.length; j++) {
            result += `<td>${values[j]}</td>`;
        }
        result += '</tr>\n';
    }

    result += '</table>';

    return result;

}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]`));