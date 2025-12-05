//now this is the promises version
//how many functions will we need? 4. success, error, doTask(), 
//display result becomes success...
//now we dont need the if statement
//due to promises, we escaped the confusion of the if else etc..
let resSpan;
function success(result){
    resSpan.innerHTML += `It's square is ${result}`;
}
function error(failure){
    resSpan.innerHTML += `${failure}`;
}
function calculateSquare(value){ //no need for callback now
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let num = Number(value);
            if(isNaN(num)){
                reject("Cannot calc square of nonnumeric data"); //instead of callback here reject
                return;
            }
            resolve(num*num); //instead of callback here resolve
        },2000);
    });
}

function doTask(){
    let inp = document.getElementById("userinp");
    resSpan = document.getElementById("result");
    let data = inp.value;
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
    let pr = calculateSquare(data); //no callback needed no need for displayResult callback now in promise
    pr.then(success,error); //in promises we use then(), pass success and failure into it
}