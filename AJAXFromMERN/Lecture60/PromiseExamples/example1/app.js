let sp1;
let sp2;

//our choice to send currSec inside
function makePromise(currSec) {
    return (pr = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let ans = currSec % 2;
            if (ans === 0) {
                resolve("Hurray! The project got done!");
                console.log("Promise resolved");
            } else {
                reject("Unfortunately, the project was not done!");
                console.log("Promise resolved");
            }
        }, 5000);
    }));
}

function success(msg) {
    sp1.innerHTML = msg;
    sp2.innerHTML = "Good Job! 😂😂";
    console.log("Success resolved");
}
function failure(msg) {
    sp1.innerHTML = msg;
    sp2.innerHTML = "Better Luck Next Time! 😒😒";
    console.log("Failure resolved");
}
function doTask() {
    let today = new Date();
    let currSec = today.getSeconds();
    sp1 = document.getElementById("result");
    sp2 = document.getElementById("icn");
    sp1.innerHTML = "Curr Val: " + currSec;
    //code runs in asynchronous mode, even when some things wait, others will still run
    let prObj = makePromise(currSec);
    console.log("After creating promise");
    prObj.then(success, failure);
    console.log("After consuming");
}