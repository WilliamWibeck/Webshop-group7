import { ICartProduct } from "./models/IProduct";

export const generateCartAmount = (shoppingCart: ICartProduct[]) => {
    let cartAmountNumber = shoppingCart.length.toString();
    let cartAmount = document.getElementById("cartAmount");
    (cartAmount as HTMLElement).innerHTML = cartAmountNumber;
  };