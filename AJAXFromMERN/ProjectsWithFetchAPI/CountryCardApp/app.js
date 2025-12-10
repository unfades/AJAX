let select;
let countrycard;
function loadTimeZones(){
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population').then((response)=>{
        return response.json();
    }).then((data)=>{
        select = document.querySelector("select");
        let arr = [];
        let i = 0;
        data.forEach((country) =>{
            arr[i++] = country.name.common;
        });
        //learn js lambda function again
        arr = arr.sort();
        console.log(arr);
        arr.forEach((country)=>{
            select.innerHTML +=`<option>${country}</option>`;
        });
    }).catch((error)=>{
        alert(error);
    });
}

function viewCountry(){
    let country = select.value;
    console.log(country);
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then((response)=>{
        return response.json();
    }).then((data) =>{
        //revise accessing json, also objects faster
        let countryName = data[0].name.common;
        let flagpngUrl = data[0].flags.png;
        let region = data[0].continents[0];
        let population = data[0].population;
        //failed let currency = data[0].currencies[0].symbol; because currencies is an object not arr
        //revise accessing objects, arrays, in general etc 
        let currency = Object.values(data[0].currencies)[0].symbol;
        //revise dom for proper adding elements to the dom
        console.log("the country name is " + countryName);
        console.log("the country flagUrl is " + flagpngUrl);
        console.log("the country region is " + region);
        console.log("the country population is " + population);
        console.log("the country currency is " + currency);
        countrycard = document.getElementById("countrycard");
        countrycard.innerHTML = '';
        countrycard.innerHTML+= `<img src = "${flagpngUrl}"><br>`;
        countrycard.innerHTML+= `name<br>${countryName}<br>`;
        countrycard.innerHTML+= `region<br>${region}<br>`;
        countrycard.innerHTML+= `population<br>${population}<br>`;
        countrycard.innerHTML+= `currency<br>${currency}<br>`;
    }).catch((error) =>{
        alert(error);
    });
}

window.onload = loadTimeZones();