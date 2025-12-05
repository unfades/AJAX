

//dummy code
function getUser(userId){
    return new Promise((resolve,reject) => {
        resSpan.innerHTML += "Gettting the user from the database...<br>";
        setTimeout(()=>{
            resolve({
                userId:userId,
                username:"Sachin",
            });
        },1000);
    });
}

function getServices(user){
    return new Promise((resolve,reject) => {
        resSpan.innerHTML += `Getting the services of user '${username}' from the API<br>`;
        setTimeout(() => {
            resolve(["Email","VPN","CDN"]);
        }, 3*1000);
    });
}

function getServiceCost(services){
    return new Promise((resolve, reject) =>{
        resSpan.innerHTML += `Calculating the service cost of ${services}<br>`;
        setTimeout(()=>{
            resolve(services.length*100);
        },2*1000);
    });
}

function doTask(){
    let inp = document.querySelector("#userinp");
    let data = inp.value;
    resSpan = document.getElementById("result");
    //the names of these functions are callbacks that resolve promises
    //and return promises to the next then functions, then finally into result
    //and displays that final cost, and catch runs whenever any of these
    //promises is rejected.
    //they are auto getting parameters as the .then returns a promise(val)
    //and the parameter that goes into the then methods is the resolved promise's val
    //that sent as its param into then, then returned promise(val), val to next then like -> then(val)
    //get it.
    //before in the then we used to send arrow funcs, now we are just doing callbacks,
    //same thing.
    //resolved promises values get sent to the next then, thats the gyst.
    getUser(data).then(getServices).then(getServiceCost).then((result)=>{
        resSpan.innerHTML += "Total cost of services is: " + result;
    }).catch((error) => {
        resSpan.innerHTML += error;
    });
}