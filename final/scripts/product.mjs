import apiFetch from "./apiFetch.mjs";
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('item')) - 1;

const item = document.getElementById('item');
const data = await apiFetch('all');

item.innerHTML = `
   <div id="info">
      <p><strong>Category:</strong> ${data[id].category}</p>
      <p><strong>Rating: </strong>${data[id].rating.rate} / 5</p>
   </div>
   <h1>${data[id].title}</h1>
   <img src="${data[id].image}" alt="">
   <h2>Price: $${data[id].price}</h2>
   <p><strong>Description: </strong>${data[id].description}</p>
`