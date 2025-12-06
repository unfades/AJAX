let unpressed = true;

function viewData(){
    let pr = fetch("https://api.github.com/users/unfades");
    let resDiv = document.getElementById("result");
    pr.then((response)=>{
        return response.json();
    }).then((data)=>{
        if(unpressed){
            resDiv.innerHTML += "name: " + data.name + "<br>";
            resDiv.innerHTML += "image: <img src = " + data.avatar_url + " width = 200px></img><br>";
            if(data.company === null) resDiv.innerHTML += "company: not available<br>";
            else resDiv.innerHTML += "company: " + data.company + "<br>";
            if(data.blog === "") resDiv.innerHTML += "website: not available<br>"; 
            else resDiv.innerHTML += "website: <a href =" + data.blog + ">"+data.blog+"</a><br>";
            unpressed = false;
        }
    });
}