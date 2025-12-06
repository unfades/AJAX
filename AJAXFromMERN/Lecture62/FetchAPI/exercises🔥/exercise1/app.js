//let unpressed = true;
//my try
// function viewData(){
//     let pr = fetch("https://api.github.com/users/unfades");
//     let resDiv = document.getElementById("result");
//     pr.then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         if(unpressed){
//             resDiv.innerHTML += "name: " + data.name + "<br>";
//             resDiv.innerHTML += "image: <img src = " + data.avatar_url + " width = 200px></img><br>";
//             if(data.company === null) resDiv.innerHTML += "company: not available<br>";
//             else resDiv.innerHTML += "company: " + data.company + "<br>";
//             if(data.blog === "") resDiv.innerHTML += "website: not available<br>"; 
//             else resDiv.innerHTML += "website: <a href =" + data.blog + ">"+data.blog+"</a><br>";
//             unpressed = false;
//         }
//     });
// }
//sirs proper with DOM
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