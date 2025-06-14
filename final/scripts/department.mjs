import apiFetch from "./apiFetch.mjs"
const urlParams = new URLSearchParams(window.location.search)
const department = urlParams.get('department')
const htmlElement = document.getElementById('department')
const data = await apiFetch(department)

htmlElement.innerHTML = "";

data.forEach(item => {
    htmlElement.innerHTML += `
   <div class="item">
      <img src="${item.image}" alt="">
      <div>
         <h2>${item.title}</h2>
         <p><strong>Rating: </strong>${item.rating.rate} / 5</p>
         <p class="price">$${item.price}</p>
         
      </div>
   </div>
  `;
});
