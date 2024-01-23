import { IProduct } from "../models/IProduct";
import { get } from "./serviceBase";

export async function getProducts (): Promise<IProduct[]> {
    let url = "https://fakestoreapi.com/products";

    let data = await get<IProduct[]>(url);
    return data;
}