async function getEmoji(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("😂");
        },3000);
    });
}

//async in front of doTask because await is used is needed now,
//also doTask now also returns a promise with value undefined.
async function doTask(){
    let resSpan = document.getElementById("result");
    let pr = await getEmoji();
    resSpan.innerHTML = pr;
}