//my try in appmine.js
//sirs this is proper with DOM
let unpressed = true;
function viewData(){
    let resDiv = document.getElementById("result");
    fetch("https://api.github.com/users/unfades").then((response)=>{
        if(response.status!==200){
            throw new Error("statusText:"+response.statusText + " status:" + response.status);
        }
        return response.json();
    }).then((user)=>{
        if(unpressed){
            let name = user.name;
            let company = user.company;
            let website = user.blog;
            let imgurl = user.avatar_url;
            let img = document.createElement("img");
            img.src = imgurl;
            let p1 = document.createElement("p");
            p1.innerHTML = `<strong>Name:</strong>${name}`;
            let p2 = document.createElement("p");
            p2.innerHTML = `<strong>Company:</strong>${company}`;
            let p3 = document.createElement("p");
            p3.innerHTML = `<strong>Site:</strong>${website}`;
            let div = document.querySelector("#details");
            div.appendChild(img);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            unpressed = false;
        }
    }).catch((error)=>{
        alert(error);
    });
}