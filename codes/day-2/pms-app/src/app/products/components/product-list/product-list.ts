import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Inject } from "@angular/core";
// import { productRecords } from "../../../data/products";
// import { ProductService } from "../../services/product.service";
import { Product } from "../../../models/product";
import { SERVICE_TOKEN } from "../../../config/constants";
import { IProductService } from "../../services/productservice.contract";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html',
    styleUrl: './product-list.css',
    //styleUrls: ['./product-list.css'],
    standalone: false,
    //providers: [ProductService]
})
export class ProductList implements OnInit, OnDestroy, OnChanges {
    products: Product[] = []

    // constructor(private ps: ProductService) {
    //     console.log('created');
    // }
    // constructor(@Inject(SERVICE_TOKEN) private ps: ProductService) {
    //     console.log('created');
    // }
    constructor(@Inject(SERVICE_TOKEN) private ps: IProductService) {
        console.log('created');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes');
    }
    ngOnDestroy(): void {
        console.log('getting destroyed...');
    }
    ngOnInit(): void {
        console.log('init');
        this.products = this.ps.getProducts();
    }
}