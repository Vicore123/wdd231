import apiFetch from "./apiFetch.mjs";
const highlights = document.getElementById('highlights');

highlights.innerHTML = '';
const data = await apiFetch('electronics');
data.forEach(product => {
   highlights.innerHTML += `
   <button class="product-cards" name="item" value="${product.id}">
      <img src="${product.image}" alt="">
      <p>${product.title}</p>
      <h3>$${product.price}</h3>
   </button>`
});
