const membershipDetails = document.getElementById("membership-details");

export function displayMembershipDetails(membership) {
  membershipDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h4>${membership.name}</h4>
    <p>Cost:</p>
    <p>${membership.cost}</p>
    <p class="spacing">Benefits:</p>
    <ul>
  `;
  membership.benefits.forEach(benefit => {
    membershipDetails.innerHTML += `<li>${benefit}</li>`
  })
  membershipDetails.innerHTML += '</ul>'
  membershipDetails.showModal();
  
  const closeModal = membershipDetails.querySelector("#closeModal");
  
  closeModal.addEventListener("click", () => {
    membershipDetails.close();
  });
}
