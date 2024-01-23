import { generateCartAmount } from "./generateCartAmount";
import { ICartProduct } from "./models/IProduct";
import { Product } from "./models/Product";

export function createHtmlForProducts(products: Product[]) {
  if (document.getElementById("mainProducts")) {
    let mainProducts = document.getElementById(
      "mainProducts"
    ) as HTMLDivElement;
    mainProducts.innerHTML = "";

    let shoppingCart: ICartProduct[] = JSON.parse(
      localStorage.getItem("shoppingCart") || JSON.stringify([])
    );

    generateCartAmount(shoppingCart);
    for (let i = 0; i < products.length; i++) {
      let productContainer = document.createElement("section");
      productContainer.className = "product--container";

      let title = document.createElement("h4");
      let description = document.createElement("p");
      let price = document.createElement("h3");
      let imageBox = document.createElement("div");
      imageBox.className = "imageContainer";
      let image = document.createElement("img");
      let cartButton = document.createElement("button");
      cartButton.className = "btn";

      title.innerHTML = products[i].title;
      description.innerHTML = products[i].description;
      price.innerHTML = "$" + products[i].price;
      image.src = products[i].image;
      image.alt = "Picture of " + products[i].title;
      cartButton.innerHTML = "Add to cart";

      mainProducts.appendChild(productContainer);
      productContainer.appendChild(imageBox);
      imageBox.appendChild(image);
      productContainer.appendChild(title);
      productContainer.appendChild(price);
      productContainer.appendChild(cartButton);
      productContainer.appendChild(description);

      productContainer.addEventListener("click", (e: Event) => {
        if (e.target !== cartButton) {
          productContainer.classList.toggle("product--container__highlighted");
        }
      });

      cartButton.addEventListener("click", () => {
        const existingProduct = shoppingCart.find(
          (item) => item.id === products[i].id
        );

        if (existingProduct) {
          existingProduct.amount++;
        } else {
          shoppingCart.push({ ...products[i], amount: 1 });
        }
        generateCartAmount(shoppingCart);

        console.log(shoppingCart);

        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      });
    }
  }
}
