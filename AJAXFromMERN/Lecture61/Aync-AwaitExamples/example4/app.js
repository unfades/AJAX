async function getEmoji(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            let num = Math.round(Math.random()*1);
            if(num == 1) resolve("😊");
            //if you used reject then there will be an exception "uncaugh in promise"
            //it can only handle resolve...
            //for that we need to use try catch.
            //try code is the chance of problematic code code,
            //catch is the code to run after that problem occurred
            else resolve("☹️");
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