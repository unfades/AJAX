function getData(){
    let pr = fetch("https://api.github.com/ksachin96"); //instead of 95. sent 96.. should be catch logically
    pr.then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
    }).catch(error=>{
        //you can see the twist between xhr and fetch the catch didnt run
        //if you want it to run and handle 400 and 500 responses, we can write
        //custom logic using 'response.status'
        console.log("inside catch");
    });
}