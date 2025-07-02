import { Product } from "../../models/product";

export interface IProductService {
    getProducts(): Product[];
}