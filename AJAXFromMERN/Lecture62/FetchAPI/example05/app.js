function getData(){
    let pr = fetch("https://api.github.com/ksachin96"); //instead of 95. sent 96.. should be catch logically
    pr.then((response) => {
        //like this the program will skip all thens and go into the catch straight up
        if(response.status!=200){
            //our custom error message
            //throw new Error("Error in server communication");
            //THIS TELLS YOU THE ACTUAL PROBLEM NOT OUR CUSTOM MESSAGE,
            //response.statusText for the error, and response.status
            throw new Error(response.statusText + " " + response.status);
        }
        console.log("Inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
    }).catch(error=>{
        //gotta do throw new Error("msg"); and if else when you want it to
        //come into catch with your custom logic
        console.log(error +"inside catch");
    });
}