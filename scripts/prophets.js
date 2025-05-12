const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
   const response = await fetch(url);
   const data = await response.json();
   // console.log(data)
   displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
   prophets.forEach((prophet) => {
      
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let birthdate = document.createElement('p')
      let birthplace = document.createElement('p')
      let portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
      birthplace.textContent = `Place of Birth: ${prophet.birthplace}`
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '250');

      card.appendChild(fullName);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(portrait);

      cards.appendChild(card);
   });
 }
getProphetData();
