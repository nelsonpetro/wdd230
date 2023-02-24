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

if (new Date().getDay() === 1 || new Date().getDay() === 2) {
	document.querySelector(".banner").style.display = "flex";
}


const currentDate = new Date();

const lastVisitDate = localStorage.getItem('lastVisitDate');

if (lastVisitDate) {
  var daysDiff = Math.round((currentDate - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24));
}

document.querySelector("#days-visits").innerHTML = `Days since your last visit:  ${daysDiff}`;

localStorage.setItem('lastVisitDate', currentDate.toString());


const bposition = document.getElementById("pattern");

bposition.addEventListener("input", (event) => {
  if (bposition.validity.patternMismatch) {
    bposition.setCustomValidity("Please enter at least 7 alphabetical characters, hyphens, or spaces.");
  } else {
    bposition.setCustomValidity("");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    let hiddenField = document.getElementById("appdate");
    hiddenField.value = new Date().toISOString();
});



















