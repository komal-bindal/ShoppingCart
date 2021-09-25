var productList = document.getElementById("products");
async function fetchProducts() {
  const url = "/api/products";
   return await fetch(url)
    
}

function getProductCard(product) {
  return `<div class="border-2 border-black m-4 p-8 shadow-lg">
    <h1 class="text-2xl font-bold underline">${product.name}</h1>
    <h3 class="text-xl font-semibold">Manufacturer: ${product.manufacturer}</h3>
    <div class="flex justify-between items-center m-2">
      <h3 class="text-xl font-bold mr-6">Price: ${product.price}</h3>
      <button class="bg-blue-300 px-8 py-1 text-lg font-semibold rounded-md shadow-md">
        Buy
      </button>
    </div>
  </div>`;
}

function displayProducts() {
  fetchProducts().then((products) => products.json())
  .then((products) =>  {
      products.forEach((product) => {
          console.log(product)
          var newCard = document.createElement('div');
          newCard.innerHTML = getProductCard(product)
          productList.append(newCard)
        //productList.append(document.write(getProductCard(product)));
      });   
  })
  .catch((err) => console.error(err));;

}

displayProducts();
