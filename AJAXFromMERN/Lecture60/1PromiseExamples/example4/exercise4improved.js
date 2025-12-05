
let resSpan;
function calculateSquare(value){ 
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let num = Number(value);
            if(isNaN(num)){
                reject("Cannot calc square of nonnumeric data"); 
                return;
            }
            resolve(num*num); 
        },2000);
    });
}

function doTask(){
    let inp = document.getElementById("userinp");
    resSpan = document.getElementById("result");
    let data = inp.value;
    let pr = calculateSquare(data);
    //now instead you can chain catch with then here right
    //if theres no probem, going into then(),
    //if there is a problem, going into catch() as it catches
    //JS knows catch runs on reject, and then runs on resolve.
    //catch also returns a promise.
    pr.then((result)=>{
        resSpan.innerHTML += `It's square is ${result}`;
    }).catch((failure)=>{
        resSpan.innerHTML += `${failure}`;
    });
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
}