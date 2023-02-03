//set the current year at the footer
document.querySelector("#currentyear").innerHTML = new Date().getFullYear();
//set the date when the page was last updated
const lastUpdated = new Date(document.lastModified);
//set 24 hour format using options
try{
const options = {hourCycle: 'h23'};
document.querySelector("#lastupdated").innerHTML = `<span class="highlight">Last updated: ${lastUpdated.toLocaleDateString("en-US", options)} ${lastUpdated.toLocaleTimeString("en-US", options)}<span class="highlight">`;
}catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

function toggleMenu() {
	document.getElementById("primarynav").classList.toggle("open");
	document.getElementById("hamburgerbtn").classList.toggle("open");
	document.getElementById("pic").classList.toggle("open");
	document.getElementById("head").classList.toggle("open");
	document.getElementById("socmedia").classList.toggle("open");
	document.getElementById("header").classList.toggle("open");
	document.getElementById("navbar").classList.toggle("open");				
}

const x = document.getElementById("hamburgerbtn");

x.onclick = toggleMenu;

const currentdate = document.querySelector("#currentdate");
// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	currentdate.innerHTML = `${new Date().toLocaleDateString("en-UK", options)}`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}
