//THIS EXAMPLE IS FROM example8 lecture 61,
//now you understand how promise chaining via .then() works.
//you can redo this via Async Await? YES
//This is it done using async await in JS
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

async function doTask(){
    let inp = document.getElementById("userinp");
    resSpan = document.getElementById("result");
    let data = inp.value;
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
    try{
        let firstSq = await calculateSquare(data);
        resSpan.innerHTML += `It's square is ${firstSq}<br>`;
        let secSq = await calculateSquare(firstSq);
        resSpan.innerHTML += `It's square is ${secSq}<br>`;
        let thirSq = await calculateSquare(secSq);
        resSpan.innerHTML += `It's square is ${thirSq}<br>`;
    }catch(error){
        resSpan.innerHTML +=`Error In Communication ${error}<br>`;
    }
}