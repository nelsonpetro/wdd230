const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);

    document.querySelector(".years").addEventListener("change", function(){
        console.log(document.querySelector(".years").value);
        const cards = document.querySelector(".cards");
        while (cards.firstChild) {
            cards.firstChild.remove();
        }

        let filteredArray;

        switch (document.querySelector(".years").value) {
            case '0':
                filteredArray = data.prophets;
              break;
            case '1':
                filteredArray = data.prophets.filter(prophet => prophet.length <= 10);
              break;
            case '2':
                filteredArray = data.prophets.filter(prophet => prophet.length >= 10 && prophet.length < 20);
              break;
            case '3':
                filteredArray = data.prophets.filter(prophet => prophet.length >= 20 && prophet.length < 30);
              break;
            case '4':
                filteredArray = data.prophets.filter(prophet => prophet.length >= 30);
              break;
        }
        displayProphets(filteredArray);
    });
}
  
const displayProphets = (prophets) => {

    const cards = document.querySelector('div.cards'); 

    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let infocontainer = document.createElement('div');
        let name = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let children = document.createElement('p');
        let length = document.createElement('p');
        let death = document.createElement('p');
        let age = document.createElement('p');
        let portrait = document.createElement('img');

        if(prophet.order === 17) {
            prophet.death = new Date();
            death.textContent = `Alive`;
            prophet.length = Math.floor((new Date() - new Date("2 January 2018"))/(1000*60*60*24*365));
        } else {
            death.textContent = `Death: ${prophet.death}`;
        }
        
        let ageCalc = Math.floor((new Date(prophet.death) - new Date(prophet.birthdate))/(1000*60*60*24*365));
              
        name.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place: ${prophet.birthplace}`;
        children.textContent = `Children: ${prophet.numofchildren}`;
        length.textContent = `Prophet years: ${prophet.length}`;
        age.textContent = `Age: ${ageCalc}`;

        infocontainer.setAttribute('class', "infocontainer");
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        infocontainer.appendChild(birthdate);
        infocontainer.appendChild(birthplace);
        infocontainer.appendChild(children);
        infocontainer.appendChild(length);
        infocontainer.appendChild(death);     
        infocontainer.appendChild(age);

        card.appendChild(name);
        card.appendChild(infocontainer);
        card.appendChild(portrait);
        cards.appendChild(card);
    }); 
}

getProphetData();