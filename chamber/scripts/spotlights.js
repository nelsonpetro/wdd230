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
