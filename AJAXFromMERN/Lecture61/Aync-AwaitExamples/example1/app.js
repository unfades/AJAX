async function getNum(){
    return 25;
}

function doTask(){
    let resSpan = document.getElementById("result");
    let ans = getNum();
    resSpan.innerHTML = ans;
}