function townPopulation(arr) {

    let obj = {};

    for (let str of arr) {
        let [town, population] = str.split(' <-> ');
        population = Number(population);

        if (town in obj) {
            obj[town] += population;
        } else {
            obj[town] = population;
        }
    }

    let entries = Object.entries(obj);

    for (let [key, value] of entries) {
        console.log(`${key} : ${value}`);
    }

}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);