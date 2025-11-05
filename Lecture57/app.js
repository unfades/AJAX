let xhr;
let endPoint = "https://worldtimeapi.org/api/timezone/Asia/Kolkata";

function connect(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("GET",endPoint,true);
    xhr.send(null);
}

function processResponse(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;
        // console.log(jsonStr);
        let obj = JSON.parse(jsonStr); //JSON in JS has stringify() and parse() methods.
        let dateTime = obj.datetime;
        let today = new Date(dateTime);
        let response = today.toDateString() + "," + today.toLocaleTimeString();
        let span = document.getElementById("currentdatetime");
        //could use both innerText and innerHTML because theres no tags here rn
        span.innerHTML = response;
    }else if(xhr.readyState === 4 && xhr.status!==200){
        alert("Error:" + xhr.status);
    }
}