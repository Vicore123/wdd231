const cards = document.getElementById("cards");

fetch("../chamber/data/points_of_interest.json")
   .then(response => {
      cards.innerHTML == '';
      return response.json();})
   .then(info => {
      console.log(info)
      info.forEach(point => {
         console.log(point)
         cards.innerHTML += `
         <div>
            <h2>${point.name}</h2>
            <figure>
               <img src="${point.image}" alt="">
            </figure>
            <p>${point.description}</p>
            <address>${point.address}</address>
            <button>Learn More</button>
         </div>`;
      });
   }
).catch(error => console.error('Erro:', error));
