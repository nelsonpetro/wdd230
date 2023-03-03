
async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();

    console.log(data);

    displayBusiness(data);

    // document.querySelector(".years").addEventListener("change", function(){
    //     console.log(document.querySelector(".years").value);
    //     const cards = document.querySelector(".cards");
    //     while (cards.firstChild) {
    //         cards.firstChild.remove();
    //     }

    //     let filteredArray;

    //     switch (document.querySelector(".years").value) {
    //         case '0':
    //             filteredArray = data.prophets;
    //           break;
    //         case '1':
    //             filteredArray = data.prophets.filter(prophet => prophet.length < 10);
    //           break;
    //         case '2':
    //             filteredArray = data.prophets.filter(prophet => prophet.length >= 10 && prophet.length < 20);
    //           break;
    //         case '3':
    //             filteredArray = data.prophets.filter(prophet => prophet.length >= 20 && prophet.length < 30);
    //           break;
    //         case '4':
    //             filteredArray = data.prophets.filter(prophet => prophet.length >= 30);
    //           break;
    //     }
    //     displayProphets(filteredArray);
    // });
}
  
const displayBusiness = (businesses) => {

    const cards = document.querySelector('.grid'); 

    businesses.forEach((business) => {

        let card = document.createElement('section');
        let infocontainer = document.createElement('div');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let logo = document.createElement('img');
              
        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        url.textContent =`${business.url}`;
        url.setAttribute('href', business.url);
        url.setAttribute('target', '_blank');
        console.log(url);

        infocontainer.setAttribute('class', "infocontainer");

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');

        infocontainer.appendChild(name);
        infocontainer.appendChild(address);
        infocontainer.appendChild(phone);
        infocontainer.appendChild(url);

        card.appendChild(logo);
        card.appendChild(infocontainer);

        cards.appendChild(card);
    }); 
}

getData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
