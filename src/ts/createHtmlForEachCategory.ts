import { ICartProduct } from "./models/IProduct";
import { Product } from "./models/Product";

export function createHtmlForEachCategory(
  products: Product[],
  category: string
) {
  if (document.getElementById("mainProducts")) {
    let mainProducts = document.getElementById(
      "mainProducts"
    ) as HTMLDivElement;
    mainProducts.innerHTML = "";

    let shoppingCart: ICartProduct[] = JSON.parse(
      localStorage.getItem("shoppingCart") || JSON.stringify([])
    );

    for (let i = 0; i < products.length; i++) {
      if (products[i].category === category) {
        let productContainer = document.createElement("section");
        productContainer.className = "productContainer";

        let title = document.createElement("h4");
        let description = document.createElement("p");
        let price = document.createElement("h3");
        let imageBox = document.createElement("div");
        imageBox.className = "imageContainer";
        let image = document.createElement("img");
        let cartButton = document.createElement("button");

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
        productContainer.appendChild(description);
        productContainer.appendChild(price);
        productContainer.appendChild(cartButton);

        cartButton.addEventListener("click", () => {
          const existingProduct = shoppingCart.find(
            (item) => item.id === products[i].id
          );

          if (existingProduct) {
            existingProduct.amount++;
          } else {
            shoppingCart.push({ ...products[i], amount: 1 });
          }

          localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        });
      }
    }
  }
}
