import { productRecords } from "../../data/products";
import { Product } from "../../models/product";

export class ProductService {
    getProducts(): Product[] {
        return [...productRecords];
    }
}