const productsContainer = document.querySelector("main");
const searchInput = document.querySelector("#search");
console.log(searchInput);

fetch("https://elbaley.github.io/sbux-menu-tr/data.json")
  .then((response) => response.json())
  .then((response) => addProducts(response.products, productsContainer));

function addProducts(products, container) {
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
              products[i]["Tüm Boylar İçin"]
                ? `<div class="price-container">
                    <span class="size">Tüm Boylar İçin</span>
                    <span class="price">${products[i]["Tüm Boylar İçin"]}TL</span>
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
              products[i]["Single (Tek ölçü)"]
                ? `<div class="price-container">
                    <span class="size">Single (Tek ölçü)</span>
                    <span class="price">${products[i]["Single (Tek ölçü)"]}TL</span>
                </div>`
                : ""
            }
            ${
              products[i]["Double (Duble ölçü)"]
                ? `<div class="price-container">
                    <span class="size">Double (Duble ölçü)</span>
                    <span class="price">${products[i]["Double (Duble ölçü)"]}TL</span>
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
