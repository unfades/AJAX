let xhr;
let timeZoneList, timeZoneName;
let endPoint = "http://worldtimeapi.org/api/timezone";
function loadTimeZones() {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processResponse;
	xhr.open("Get", endPoint, true);
	xhr.send(null);
}
function processResponse() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		let jsonStr = xhr.responseText;
		let str = "";
		let countryArr = JSON.parse(jsonStr);
		countryArr.forEach((country) => {
			str += `<option>${country}</option>`;
		});
		timeZoneList = document.getElementById("timezone");
		timeZoneList.innerHTML = str;
	}
}
function showData() {
	timeZoneName = timeZoneList.value;
	let endPoint2 = endPoint + "/" + timeZoneName;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = processTime;
	xhr.open("Get", endPoint2, true);
	xhr.send(null);
}
function processTime() {
	if (xhr.readyState === 4 && xhr.status === 200) {
		let jsonStr = xhr.responseText;
		let obj = JSON.parse(jsonStr);
		let dateTime = obj.datetime;
		// console.log(timeZoneName);
		// console.log("dt", dateTime);
		let today = new Date(dateTime);
		let dateStr = today.toLocaleString("en-US", { timeZone: timeZoneName });
		let globalDate = new Date(dateStr);
		let globalDateTimeStr =
			globalDate.toDateString() + "," + globalDate.toLocaleTimeString();

		let span = document.getElementById("currentdatetime");
		span.innerHTML = globalDateTimeStr;
	}
}
window.onload = loadTimeZones;
