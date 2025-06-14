import apiFetch from "./apiFetch.mjs";
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('item')) - 1;

const item = document.getElementById('item');
const data = await apiFetch('all');

item.innerHTML = `
<div>
   <div id="info">
      <p><strong>Category:</strong> ${data[id].category}</p>
      <p><strong>Rating: </strong>${data[id].rating.rate} / 5</p>
   </div>
   <h1>${data[id].title}</h1>
   <img src="${data[id].image}" alt="">
   <h2>Price: $${data[id].price}</h2>
   <button>Add to cart</button>
   <p><strong>Description: </strong>${data[id].description}</p>
</div>
`

const highlights = document.getElementById('highlights');

highlights.innerHTML = '<h1>Related Products:</h1>';
const hightlightData = await apiFetch(data[id].category);
hightlightData.forEach(product => {
   highlights.innerHTML += `
   <button class="product-cards" name="item" value="${product.id}">
      <img src="${product.image}" alt="">
      <p>${product.title}</p>
      <h3>$${product.price}</h3>
   </button>`
});
