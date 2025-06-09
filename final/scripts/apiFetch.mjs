const url = 'https://fakestoreapi.com/products/category/'

export default async function apiFetch(category) {
   let modified_url = `${url}${category}`;
   if (category == 'all') {
      modified_url = 'https://fakestoreapi.com/products/'
   }
   try {
      const response = await fetch(modified_url);
      if (response.ok) {
         const data = await response.json();
         return data
      } else {
         throw Error(await response.text());
      }
   } catch (error) {
      console.log(error)
   }
}