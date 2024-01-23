import { createHtmlForForm } from "./createHtmlForForm";
import { generateCartAmount } from "./generateCartAmount";
import { ICartProduct } from "./models/IProduct";

let shoppingCart: ICartProduct[] = JSON.parse(
  localStorage.getItem("shoppingCart") || JSON.stringify([])
);

generateCartAmount(shoppingCart);

let paymentButton = document.getElementById("payment-btn");

createHtmlForForm();

paymentButton?.addEventListener("click", () => {
  if (document.getElementById("mainPay")) {
    const mainPay = document.getElementById("mainPay") as HTMLDivElement;
    mainPay.innerHTML = "";
    mainPay.className = "main";

    let spinner = document.createElement("span");
    spinner.className = "loader";
    mainPay.appendChild(spinner);

    setTimeout(finished, 4000);

    function finished() {
      mainPay.innerHTML = "";
      mainPay.className = "mainFinished";

      let image = document.createElement("img");
      image.src = "src/img/betala.png";
      mainPay.appendChild(image);
      let title = document.createElement("h1");
      title.innerHTML = "Ditt köp har genomförts!";
      mainPay.appendChild(title);

      if(document.getElementById("cartAmount")){
        let cart = document.getElementById("cartAmount") as HTMLElement;;
        cart.innerHTML = "0";
      }
    }
  }
});
