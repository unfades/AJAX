
function getData(){

    let pr = fetch("https://api.github.com/users/unfades");
    console.log(pr);
    pr.then((response) => {
        let data = response.json();
        console.log(data); //expecting JSON but no not JSON
        //again it says Promise {<pending>} see notes and example 2,3.
    })
}