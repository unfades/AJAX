//THis is to understand since .then() returns a promise always,
//you can chain multiple .then()s then they will alter the val,
//and they will return as promise(val) just for now this is possible,
//know this.

async function makePromise(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(10);
        },2000);
    });
}

//async in front of doTask because await is used is needed now,
//also doTask now also returns a promise with value undefined.
async function doTask(){
    let resSpan = document.getElementById("result");
    let pr = makePromise();
    pr.then((result)=>{
        resSpan.innerHTML = "received val: " + result + "<br>";
        return result*2;
    }).then((result)=>{
        resSpan.innerHTML += "received val: " + result + "<br>";
        return result*2;
    }).then((result)=>{
        resSpan.innerHTML += "received val: " + result + "<br>";
    });
    //this is called chaining of promiseses
}