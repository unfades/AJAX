let xhr;
let endPoint = "person_details.json";
function connect() {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processResponse;
	xhr.open("get", endPoint, true);
	xhr.send(null);
}
function processResponse() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		let jsonStr = xhr.responseText;
		let personObj = JSON.parse(jsonStr);
		let personDiv = document.getElementById("person");
		personDiv.innerHTML = `<span>Name:</span> ${personObj.name}<br><span>Age:</span> ${personObj.age}`;
		let projArr = personObj.projects;
		let str = "";
		for (let proj of projArr) {
			str = str + proj.name + ",";
		}
		str = str.substring(0, str.lastIndexOf(","));
		personDiv.innerHTML += `<br><span>Projects:</span>${str}`;
	}
}
