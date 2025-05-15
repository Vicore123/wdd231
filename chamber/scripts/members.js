const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');
const cards = document.querySelector('#companies');

const switchView = async (displayFn, viewClass) => {
  const companies = await getCompanies();
  displayFn(companies);
  cards.className = viewClass;
};

gridButton.addEventListener('click', () => switchView(displayCompaniesGrid, 'grid'));
listButton.addEventListener('click', () => switchView(displayCompaniesList, 'list'));

async function getCompanies() {
   const response = await fetch('../data/members.json');
   const data = await response.json();
   return data.companies;
};

const displayCompaniesGrid = (companies) => {
   cards.innerHTML = '';
   companies.forEach((company) => {
      
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let address = document.createElement('p')
      let phone = document.createElement('p');
      let foundedYear = document.createElement('p');
      let website = document.createElement('a')
      let portrait = document.createElement('img');

      name.textContent = company.name;
      address.textContent = company.address;
      phone.textContent = company.phone;
      foundedYear.textContent = `founded Year: ${company.foundedYear}`;
      website.textContent = company.website;
      website.setAttribute('href', company.website);

      portrait.setAttribute('src', company.image);
      portrait.setAttribute('alt', `Portrait of ${company.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '250');

      card.setAttribute('class', 'grid-card')
      card.appendChild(portrait);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(foundedYear);
      card.appendChild(website);

      cards.appendChild(card);
   });
}
const displayCompaniesList = (companies) => {
   cards.innerHTML = '';
   companies.forEach((company) => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let address = document.createElement('p')
      let phone = document.createElement('p');
      let website = document.createElement('a');

      name.textContent = company.name;
      address.textContent = company.address;
      phone.textContent = company.phone;
      website.textContent = company.website;
      website.setAttribute('href', company.website);

      card.setAttribute('class', 'list-card')
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);

      cards.appendChild(card);
   });
};

switchView(displayCompaniesGrid, 'grid');