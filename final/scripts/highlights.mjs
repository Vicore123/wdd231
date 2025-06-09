import apiFetch from "./apiFetch.mjs";
const highlights = document.getElementById('highlights');

async function loadData() {
   highlights.innerHTML = '';
   const data = await apiFetch('electronics');
   data.forEach(product => {
      highlights.innerHTML += `
      <div class="product-cards">
         <img src="${product.image}" alt="">
         <p>${product.title}</p>
         <h3>$${product.price}</h3>
      </div>`
   });
}

loadData();
