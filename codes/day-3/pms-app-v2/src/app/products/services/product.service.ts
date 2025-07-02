import { productRecords } from "../../data/products";
import { Product } from "../../models/product";
import { IProductService } from "./productservice.contract";

export class ProductService implements IProductService {
    getProducts(): Product[] {
        return [...productRecords];
    }
}