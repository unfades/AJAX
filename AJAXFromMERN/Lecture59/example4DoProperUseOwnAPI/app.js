let xhr;
let timeZoneList;
let timeZoneName;
//whenever an xhr object is used by an api,
//after use, it will get exhausted because many browsers
//change it's properties after use
//this is why however many apis you are using,
//you will need different xhr objects for each of them.
let endPoint = "http://worldtimeapi.org/api/timezone";
function loadTimeZones() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("GET", endPoint, true);
    xhr.send(null);
}

function processResponse() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let jsonStr = xhr.responseText;
        let str = "";
        console.log(jsonStr);
        let countryArr = JSON.parse(jsonStr);
        
        countryArr.forEach((country) => {
            str += `<option>${country}</option>`;
        });
        timeZoneList = document.getElementById("countries");
        timeZoneList.innerHTML = str;
    }
}

function showData(){
    timeZoneName = timeZoneList.value;
    let endPoint2 = endPoint + "/" + timeZoneName;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("GET", endPoint2, true);
    xhr.send(null);
}

function processTime() {
    if (xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;
        let obj = JSON.parse(jsonStr);
        let dateTime = obj.datetime;
        let today = new Date(dateTime);
        let dateStr = today.toLocaleString("en-US", {timezone: timeZoneName}) + "," + today.toLocaleTimeString();
        let globalDate = new Date(dateStr);
        let response = today.toLocaleTimeString("en-US", {timezone: timeZoneName});
        let span = document.getElementById("currentdatetime");
        span.innerHTML = response;
    }
}
window.onload = loadTimeZones;