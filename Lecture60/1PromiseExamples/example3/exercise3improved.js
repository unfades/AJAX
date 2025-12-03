//now this is the promises version
//how many functions will we need? 4. success, error, doTask(), 
//display result becomes success...
//now we dont need the if statement
//due to promises, we escaped the confusion of the if else etc..
let resSpan;
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
    let pr = calculateSquare(data); //no callback needed no need for displayResult callback now in promise
    //pr.then(success,error); //in promises we use then(), pass success and failure into it
    //since success, error are both callbacks because they're functions,
    //you can directly write the functions like arrow functions inside pr.then()'s body.
    //that's the more formal way to go in JS it's what devs love to do USE arrow functions.
    pr.then((result)=>{
        resSpan.innerHTML += `It's square is ${result}`;
    },(failure)=>{
        resSpan.innerHTML += `${failure}`;
    });
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
}