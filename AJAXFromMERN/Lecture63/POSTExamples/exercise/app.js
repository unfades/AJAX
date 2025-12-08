function sendData(){
    let div = document.getElementById("detail");
    div.innerHTML = "Sending Request...";
    //let fName = document.querySelector("input").value; //works for first but not for second and third
    //let lName = document.querySelector("input").value; //again gets first not for second and third
    let fName = document.querySelector("input[name = 'firstName']").value; //works using the css properties
    let lName = document.querySelector("input[name = 'lastName']").value; //works using the css properties
    let job = document.querySelector("input[name = 'jobTitle']").value; //works using the css properties
    //good for when theres no id there, or nothing there.
    //now you must put it into a js object and then to send it you must use JSON.stringify()
    //made JSON object and put in the data needed to be inside it into it as values of the keys
    //we are going to send this as key val pairs, this is what it is going to return back also..
    const user = {
                   firstName: fName,
                   lastName: lName,
                   jobTitle: job
    };

    let jsonStr = JSON.stringify(user);

    //Another JS Object needs to be made for POST sending method, body, headers
    //headers also is a key that hold json type data specifying content type and the format
    let options = {
                    method: 'POST',
                    body: jsonStr,
                    headers:{'Content-Type': 'application/json'},
    };
    //now call fetch method
    fetch("https://reqres.in/api/users", options).then((response) =>{
        if(response.status!==201){
            throw new Error(response.status + ": " + response.statusText);
        }
        return response.json(); //converts JSON into JS object now easily
    }).then((user)=>{
        div.innerHTML = "Response Received<br>";
        div.innerHTML += `first name: ${user.firstName}`; //if you didnt write it the same way it would be
        //undefined, it must be accessed how it is sent to us, and its sent back the same like the 
        //user JSON object name we sent
        div.innerHTML += `last name: ${user.lastName}`;
        div.innerHTML += `job title: ${user.jobTitle}`;
        div.innerHTML += `id: ${user.id}`;
        let dt = new Date(DataTransfer.createdAt);
        //toDateString removes the extra things from it and toLocaleTimeString() returns it in indian format
        //because we are accesing from india
        let dateStr = dt.toDateString() + ","+dt.toLocaleTimeString();
        div.innerHTML += `created at: ${dateStr}`;
    }).catch((error)=>{
        alert(error);
    });
}