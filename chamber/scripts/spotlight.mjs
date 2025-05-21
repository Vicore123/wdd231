const cards = document.querySelector('#spotlight');

async function getSpotlight() {
   const response = await fetch('./data/members.json');
   const data = await response.json();
   return data.companies.filter(company => company.membershipLevel >= 2).sort(() => 0.5 - Math.random()).slice(0, 3);
}

async function displaySpotlight(companies) {
   companies.forEach((company) => {
      let card = document.createElement('section');
      let info = document.createElement('div')
      let name = document.createElement('h3');
      let portrait = document.createElement('img');
      let email = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');

      name.textContent = company.name;
      email.innerHTML = `<strong>EMAIL:</strong> ${company.email}`;
      phone.innerHTML = `<strong>PHONE:</strong> ${company.phone}`;
      website.innerHTML = `<strong>URL:</strong> ${company.website}`

      portrait.setAttribute('src', company.image);
      portrait.setAttribute('alt', `Portrait of ${company.name}`);
      portrait.setAttribute('loading', 'lazy');

      card.appendChild(name);
      card.appendChild(portrait);

      info.appendChild(email);
      info.appendChild(phone);
      info.appendChild(website);

      card.appendChild(info)
      cards.appendChild(card);
   });
}

async function init() {
   const spotlightCompanies = await getSpotlight();
   displaySpotlight(spotlightCompanies);
}
init();
