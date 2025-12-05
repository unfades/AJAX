//this is example 4 from lecture 60, now we have to do this using
//async-await...
let resSpan;
//now we know a promise will come
async function calculateSquare(value){ 
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
    
    resSpan.innerHTML = `Curr Value:${data}<br>`;
    try{
        let pr = await calculateSquare(data);
        resSpan.innerHTML+=`It's square is: ${pr}`;
    }catch(error){
        resSpan.innerHTML+=`${error}`;
    }finally{
        resSpan.innerHTML+=`<br>Thank you for using the app!`;
    }
    //you have to move this line 
    // resSpan.innerHTML = `Curr Value:${data}<br>`;
    // up or else everything will get wiped because
    //await makes async code synchronous, so this line would wipe all the += from above
    //by = "Curr Value:${data}<br>";
    //resSpan.innerHTML = `Curr Value:${data}<br>`;
    /*
    pr.then((result)=>{
        resSpan.innerHTML += `It's square is ${result}`;
    }).catch((failure)=>{
        resSpan.innerHTML += `${failure}`;
    }).finally(()=>{
        resSpan.innerHTML +="Thank you for using the App!";
    });
    resSpan.innerHTML = `Curr Value: ${data}<br>`;
    instead of this...*/
}