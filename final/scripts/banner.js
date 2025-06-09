const images = ['./images/banner1.jpeg', './images/banner2.jpeg', './images/banner3.jpeg'];
let currentIndex = 0;
const imgElement = document.getElementById('banner-img');

setInterval(() => {
   currentIndex++;
   if (currentIndex >= images.length) {
      currentIndex = 0;
   }
   imgElement.style.opacity = 0;

   setTimeout(() => {
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 1;
   }, 500);
}, 3000);
