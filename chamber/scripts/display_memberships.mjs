import { displayMembershipDetails } from "./memberships_modal.mjs";

const memberships = document.getElementById("memberships");

fetch('../chamber/data/membership_details.json')
  .then(response => response.json())
  .then(membership_details => {

    function displayMemberships() {
      memberships.innerHTML = '<h3>Membership Levels</h3>';
      
      membership_details.membership_levels.forEach(membership => {

        const div = document.createElement('div');
        div.innerHTML = `
          <h4>${membership.name}</h4>
          <button>Learn More</button>
        `;
        
        const button = div.querySelector('button');
        button.addEventListener('click', () => displayMembershipDetails(membership));
        
        memberships.appendChild(div);
      });
    }
    
    displayMemberships();

  })
  .catch(error => console.error('Erro:', error));
