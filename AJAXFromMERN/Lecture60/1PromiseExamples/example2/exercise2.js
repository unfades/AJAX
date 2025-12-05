//THis is by using callback, next we will do promises version

let resSpan;
function displayResult(result){
    if(typeof result === 'number'){
        resSpan.innerHTML += `It's square is ${result}`;
    }else{
        resSpan.innerHTML += `${result}`;
    }
}

function calculateSquare(value, callback){
    setTimeout(()=>{
    let num = Number(value);
    if(isNaN(num)){
        callback("Cannot calc square of nonnumeric data");
        return;
    }
    callback(num*num);
    },2000);
}

function doTask(){
    let inp = document.getElementById("userinp");
    resSpan = document.getElementById("result");
    let data = inp.value;
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
    calculateSquare(data,displayResult);
}