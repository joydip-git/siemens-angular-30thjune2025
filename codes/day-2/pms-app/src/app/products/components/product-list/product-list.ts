import { Component } from "@angular/core";
import { productRecords } from "../../../data/products";
import { ProductService } from "../../services/product.service";
import { Product } from "../../../models/product";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html',
    styleUrl: './product-list.css',
    //styleUrls: ['./product-list.css'],
    standalone: false,
    //providers: [ProductService]
})
export class ProductList {
    constructor(private ps: ProductService) {
    }
    products: Product[] = []
}