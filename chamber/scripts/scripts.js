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

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    displaySpotlight(data);
}

getData();

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const displaySpotlight = (data) => {
	const membership = data.filter(business => business.mlevel == "Gold" || business.mlevel == "Silver");
	const randomInt = random(2,4);
	const randSpotlights = membership.sort(() => .5 - Math.random()).slice(0,randomInt);

	console.log(randomInt);

	const container = document.querySelector(".spotlight-container");

	randSpotlights.forEach((business) => {
		let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let membership = document.createElement('p');
        let url = document.createElement('a');
        let logo = document.createElement('img');
        
		card.setAttribute("class","spotlight");

		const mquery = window.matchMedia("(min-width: 64rem)");

		if(randomInt === 3 && mquery.matches) {
			logo.style.maxWidth = "200px";
		}
		
        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        membership.textContent = `Membership level: ${business.mlevel}`;
        url.textContent =`${business.url}`;
        url.setAttribute('href', business.url);
        url.setAttribute('target', '_blank');

		logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');

		card.appendChild(logo);
		card.appendChild(name);
		card.appendChild(address);
		card.appendChild(phone);
		card.appendChild(membership);
		card.appendChild(url);

		container.appendChild(card);
	});

}






