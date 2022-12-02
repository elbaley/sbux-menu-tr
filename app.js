import data from "/data.json" assert { type: "json" };
const { products } = data;

const productsContainer = document.querySelector("main");

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

          </section>
        </div>`;
    // insert html
    currentProduct.innerHTML = currentProductHTML;
    // add product to the container
    container.append(currentProduct);
  }
}

addProducts(products, productsContainer);
