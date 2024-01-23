import { generateCartAmount } from "./generateCartAmount";
import { ICartProduct } from "./models/IProduct";

let shoppingCart: ICartProduct[] = JSON.parse(
  localStorage.getItem("shoppingCart") || JSON.stringify([])
);

generateCartAmount(shoppingCart);

const productsDisplay = document.getElementById(
  "products-display"
) as HTMLDivElement;

window.addEventListener("load", createShoppingBag);

export function createShoppingBag() {
  let shoppingCart: ICartProduct[] = JSON.parse(
    localStorage.getItem("shoppingCart") || JSON.stringify([])
  );
  productsDisplay.innerHTML = "";
  if (shoppingCart.length === 0) {
    const emptyCart = document.createElement("p");
    emptyCart.innerHTML = "Din varukorg är tom";
    productsDisplay.appendChild(emptyCart);
  } else {
    let partSum: number = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
      let product = document.createElement("div");
      product.className = "product";
      let trashCan = document.createElement("i");
      trashCan.className = "fa fa-trash";

      let imgBox = document.createElement("div");
      imgBox.className = "imageContainer";
      let img = document.createElement("img");
      let title = document.createElement("h4");
      let price = document.createElement("h3");

      let itemAmount = document.createElement("input");
      itemAmount.className = "itemAmount";
      itemAmount.type = "number";

      itemAmount.value = shoppingCart[i].amount.toString();

      title.innerHTML = shoppingCart[i].title;
      price.innerHTML = "$" + shoppingCart[i].price;
      img.src = shoppingCart[i].image;
      img.alt = "Picture of " + shoppingCart[i].title;

      let x = shoppingCart[i].price;
      let z = shoppingCart[i].amount;
      let c = x * z;

      partSum = partSum + c;

      productsDisplay.appendChild(product);

      product.appendChild(itemAmount);
      product.appendChild(imgBox);
      imgBox.appendChild(img);
      product.appendChild(title);
      product.appendChild(price);
      product.appendChild(trashCan);

      trashCan.addEventListener("click", () => {
        shoppingCart.splice(i, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        createShoppingBag();
      });

      itemAmount.addEventListener("change", (e) => {
        let target = e.target as HTMLInputElement;
        let amount = Number(target.value);
        let updatedCart = shoppingCart.map((item) => {
          if (item.id === shoppingCart[i].id) {
            return { ...item, amount };
          } else {
            return item;
          }
        });
        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
        createShoppingBag();
      });
    }
    let sum = document.getElementById("sum") as HTMLParagraphElement;
    sum.innerHTML = "$" + partSum.toFixed(2);
  }
}
