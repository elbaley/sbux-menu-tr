const productsContainer = document.querySelector("main");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search");

console.log(searchForm);

const fetchProducts = (filter) => {
  fetch("https://elbaley.github.io/sbux-menu-tr/data.json")
    .then((response) => response.json())
    .then((response) => {
      const filteredProducts = response.products.filter((product) =>
        product.product.toLowerCase().includes(filter)
      );
      addProducts(
        filter ? filteredProducts : response.products,
        productsContainer
      );
    });
};

function addProducts(products, container) {
  //remove existing products
  container.innerHTML = "";
  // add products
  for (let i = 0; i < products.length; i++) {
    const currentProduct = document.createElement("article");
    currentProduct.classList.add("product");
    const currentProductHTML = `
        ${
          //if there is an image add it
          products[i].imageLocation
            ? `<img src="${products[i].imageLocation}" alt="" class="product-img">`
            : ""
        }
        <div class="details">
          <h2>${products[i].product}</h2>

          <section class="prices">
            ${
              products[i].short
                ? `<div class="price-container">
                     <span class="size">Short</span>
                    <span class="price">${products[i].short}TL</span>
                   </div>`
                : ""
            }
            ${
              products[i].tall
                ? `<div class="price-container">
                     <span class="size">Tall</span>
                    <span class="price">${products[i].tall}TL</span>
                   </div>`
                : ""
            }
            ${
              products[i].grande
                ? `<div class="price-container">
                     <span class="size">Grande</span>
                    <span class="price">${products[i].grande}TL</span>
                   </div>`
                : ""
            }
            ${
              products[i].venti
                ? `<div class="price-container">
                        <span class="size">Venti</span>
                        <span class="price">${products[i].venti}TL</span>
                    </div>`
                : ""
            }
            ${
              products[i]["T??m Boylar ????in"]
                ? `<div class="price-container">
                    <span class="size">T??m Boylar ????in</span>
                    <span class="price">${products[i]["T??m Boylar ????in"]}TL</span>
                </div>`
                : ""
            }
            ${
              products[i].solo
                ? `<div class="price-container">
            <span class="size">Solo</span>
            <span class="price">${products[i].solo}TL</span>
            </div>`
                : ""
            }
            ${
              products[i].doppio
                ? `<div class="price-container">
                    <span class="size">Doppio</span>
                    <span class="price">${products[i].doppio}TL</span>
                </div>`
                : ""
            }
            ${
              products[i]["Single (Tek ??l????)"]
                ? `<div class="price-container">
                    <span class="size">Single (Tek ??l????)</span>
                    <span class="price">${products[i]["Single (Tek ??l????)"]}TL</span>
                </div>`
                : ""
            }
            ${
              products[i]["Double (Duble ??l????)"]
                ? `<div class="price-container">
                    <span class="size">Double (Duble ??l????)</span>
                    <span class="price">${products[i]["Double (Duble ??l????)"]}TL</span>
                </div>`
                : ""
            }
          </section>      
        </div>`;
    // insert html
    currentProduct.innerHTML = currentProductHTML.trim();
    // add product to the container
    container.append(currentProduct);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchProducts(searchInput.value.toLowerCase());
});

fetchProducts();
