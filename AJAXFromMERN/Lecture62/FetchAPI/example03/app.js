
function getData(){

    let pr = fetch("https://api.github.com/users/unfades");
    console.log(pr);
    pr.then((response) => {
        return response.json();
    }).then((data)=>{
        console.log(data); //now finally the javascript object comes.
        //it does not need to be parsed. it itself sends you a parsed object.
        //it is a method named .json() but it sends parsed by itself.
        //no need to parse that. you can directly access keys and values in it.
        //see that, simple, clean access, in such little lines of code.
        console.log(data.name);
        console.log(data.url);
    });
}