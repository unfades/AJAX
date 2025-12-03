//rewrite with Promises
//from Lecture57 example1 folder,
//this whole code is rewritten now with the help of promise.
//it all starts when clicking connect() button in html,
//so lets start with connect() functionc code.
//endpoint is local now not global because
//resolve code is right here and if we need resolve it can just be used here.
function connect(){
    let endPoint = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";
    let sp = document.getElementById("currentdatetime");
    let pr = load(endPoint);
    pr.then((result)=>{
        let obj = JSON.parse(result);
        //console.log(obj);
        //string form of the json objects datetime is here in datetime
        let datetime = obj.datetime;
        //locale specific datetime is here now
        let today = new Date(datetime);
        sp.innerHTML = today.toDateString() + "," + today.toLocaleTimeString();
    }).catch((error)=>{
        sp.innerHTML = "Unfortunately cannot communicate with the server<br>Reason:" + error;
    });
}
//takes endPoint into it
function load(url){
    //we dont know how to use the fetch api yet, so we use XHR
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText);
            }else if(xhr.readyState === 4 && xhr.status !== 200){
                reject(xhr.statusText);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    });
}