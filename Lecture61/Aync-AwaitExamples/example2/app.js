async function makePromise(){
    return 25;
}

function doTask(){
    let resSpan = document.getElementById("result");
    let pr = makePromise();
    pr.then((result)=>{
        resSpan.innerHTML = result;
    });
}