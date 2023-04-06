function toggleMenu() {
	document.querySelector(".navbar").classList.toggle("open");
	document.querySelector(".hamburger").classList.toggle("open");			
}

const x = document.querySelector(".hamburger");

x.onclick = toggleMenu;

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

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const currentPage = window.location.href;
navLinks.forEach(link => {
  if (link.href === currentPage) {
    link.classList.add('active');
  }
});