import { generateCartAmount } from "./generateCartAmount";
import { ICartProduct } from "./models/IProduct";
import { Product } from "./models/Product";
import { getProducts } from "./services/productService";

let shoppingCart: ICartProduct[] = JSON.parse(
  localStorage.getItem("shoppingCart") || JSON.stringify([])
);

generateCartAmount(shoppingCart);

async function getProductsToClass(): Promise<Product[]> {
  let products = await getProducts();
  //console.log(products);

  let listOfProducts = products.map((product) => {
    return new Product(
      product.id,
      product.title,
      product.price,
      product.description,
      product.category,
      product.image
    );
  });
  //console.log(listOfProducts);
  return listOfProducts;
}
let products: Product[] = await getProductsToClass();
console.log(products);

localStorage.setItem("productsFromApi", JSON.stringify(products));
