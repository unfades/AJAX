

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
    //get it.
    getUser(data).then(getServices).then(getServiceCost).then((result)=>{
        resSpan.innerHTML += "Total cost of services is: " + result;
    }).catch((error) => {
        resSpan.innerHTML += error;
    });
}