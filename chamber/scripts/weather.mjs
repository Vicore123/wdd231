import { convert_unix } from "./convert_unix.mjs";
import { displayResults } from "./display_results.mjs";

const key = '5b2f2418f17def241dd0845f2f55aa8a'
const lat = -3.82
const lon = -38.49
const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${key}`;
console.log(url)

async function apiFetch() {
   try {
      const response = await fetch(url);
      if (response.ok) {
         const data = await response.json();
         console.log(data.list[0]); // testing only
         displayResults(data.list[0], data);
      } else {
         throw Error(await response.text());
      }
   } catch (error) {
      console.log(error);
   }
}

apiFetch();