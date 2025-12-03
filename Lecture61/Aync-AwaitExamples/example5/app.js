async function getEmoji(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            let num = Math.round(Math.random()*1);
            if(num == 1) resolve("😊");
            else reject("☹️");
        },3000);
    });
}

//async in front of doTask because await is used is needed now,
//also doTask now also returns a promise with value undefined.
async function doTask(){
    let resSpan = document.getElementById("result");
    try{
        let pr = await getEmoji();
        resSpan.innerHTML = "Resolved"+pr;
    }catch(error){
        resSpan.innerHTML = "Rejected"+error;
    }
}