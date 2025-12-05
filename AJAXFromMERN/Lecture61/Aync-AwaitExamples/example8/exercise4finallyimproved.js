//now understand the chaining of promises how its working here,
//when resolve works, then go through what happens with your mind...
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

    pr.then((result)=>{
        resSpan.innerHTML += `It's square is ${result}<br>`;
        return calculateSquare(result);
    }).then((result)=>{
        resSpan.innerHTML += `It's square is ${result}<br>`;
        return calculateSquare(result);
    }).then((result)=>{
        resSpan.innerHTML += `It's square is ${result}<br>`;
    });
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
}