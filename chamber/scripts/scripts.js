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
	document.querySelector(".pic").classList.toggle("open");
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

// Get all the links in the nav bar
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the links and add a click event listener to each one
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the active class to the clicked link
    this.classList.add('active');
  });
});

// Set the active class to the link corresponding to the current page
const currentPage = window.location.href;
navLinks.forEach(link => {
  if (link.href === currentPage) {
    link.classList.add('active');
  }
});




