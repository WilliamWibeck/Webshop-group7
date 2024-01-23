import { createHtmlForProducts } from "./createHtmlForProducts";
import { Product } from "./models/Product";

let products: Product[] = JSON.parse(
  localStorage.getItem("productsFromApi") || JSON.stringify([])
);

const searchParams = new URLSearchParams(window.location.search);

const category = searchParams.get("category");

let filteredProducts = category
  ? products.filter((value) => category === value.category)
  : products;

createHtmlForProducts(filteredProducts);
