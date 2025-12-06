
function showPerson(){
    let button = document.querySelector("#button");
    button.innerHTML = '<img height = "20px" width = "40px" src = "https://usagif.com/wp-content/uploads/loading-96.gif">';
    fetch("https://randomuser.me/api").then((response)=>{
        return response.json();
    }).then((user)=>{
        setTimeout(()=>{
        let div = document.querySelector("#image");
        let div2 = document.querySelector("#name");
        let div3 = document.querySelector("#gender");
        let div4 = document.querySelector("#phone");
        let name = user.results[0].name.first + " " + user.results[0].name.last;
        let imgurl = user.results[0].picture.large;
        let gender = user.results[0].gender;
        let phone = user.results[0].phone;
        div.innerHTML = "<img src = " + imgurl + "></img>";
        div2.innerHTML = "<p>Name: " + name + "</p>";
        div3.innerHTML = "<p> Gender: " + gender + "</p>";
        div4.innerHTML = "<p> Phone: " + phone + "</p>";
        button.innerHTML = "Show Person";
        }, 2000);
    });
}