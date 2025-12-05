
function getData(){
    //that's it, crazy!
    let pr = fetch("https://api.github.com/users/unfades");
    console.log(pr); //this will show Promise {<pending>} on the console..
    //and you know this is why, promises are not handled this way.
    //promises are handled using .then() <-----
    //now the correct way
    pr.then((response) => {
        //if XHR was being used, then this response would be JSON, it would look like a JSON object.
        console.log(response); //observe what is being displayed...
        //What is there is in the format of an object in JS, it is an object.
        //but before it it says Response, it is a Response object.
        //This has JSON data, but it is a Response object being returned,
        //then YOU MUST EXTRACT the data from this...
    })
}