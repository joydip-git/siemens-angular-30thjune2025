import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Inject, Input } from "@angular/core";
// import { productRecords } from "../../../data/products";
// import { ProductService } from "../../services/product.service";
import { Product } from "../../../models/product";
import { SERVICE_TOKEN } from "../../../config/constants";
import { IPmsService } from "../../services/productservice.contract";
import { Observer, Subscription } from "rxjs";
import { ApiResponse } from "../../../models/api-response";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html',
    styleUrl: './product-list.css',
    //styleUrls: ['./product-list.css'],
    standalone: false,
    //providers: [ProductService]
})
export class ProductList implements OnInit, OnDestroy, OnChanges {
    products?: Product[];
    isLoadingOver = false;
    errorInfo = ''
    @Input('filterTextValue') filterText = 'NA'
    private sub: Subscription | undefined;
    private deleteSub?: Subscription;

    // constructor(private ps: ProductService) {
    //     console.log('created');
    // }
    // constructor(@Inject(SERVICE_TOKEN) private ps: ProductService) {
    //     console.log('created');
    // }
    constructor(@Inject(SERVICE_TOKEN) private ps: IPmsService) {
        console.log('created');
    }
    ngOnChanges(changes: SimpleChanges): void {
        // const copy = [...this.products];
        // if (this.filterText && this.filterText !== '') {
        //     this.products = copy.filter(p => p.productName.toLowerCase().includes(this.filterText.toLowerCase()));
        // }
    }
    ngOnDestroy(): void {
        console.log('getting destroyed...');
        this.sub?.unsubscribe();
    }
    ngOnInit(): void {
        console.log('init');
        this.fetchProductRecords()
        // const responseObserver: Observer<ApiResponse<Product[]>> = {
        //     next: () => { },
        //     error: () => { },
        //     complete: () => { }
        // }
        // this.sub = obs.subscribe(responseObserver)

    }
    delete(id: number) {
        if (confirm('would you like to delete?')) {
            this.deleteSub = this.ps.deleteProduct(id).subscribe({
                next: (resp) => {
                    if (resp.data !== null) {
                        //this.isLoadingOver = true
                        this.errorInfo = ''
                        //this.products = resp.data
                        alert(resp.message)
                    } else {
                        //this.isLoadingOver = true
                        this.errorInfo = resp.message
                    }
                },
                error: (err) => {
                    this.errorInfo = err.message
                    //this.isLoadingOver = true
                },
                complete: () => {
                    this.fetchProductRecords()
                }
            })
        }
    }
    private fetchProductRecords() {
        const obs = this.ps.getProducts();
        this.sub = obs.subscribe(
            {
                next: (resp) => {
                    if (resp.data !== null) {
                        this.products = resp.data;
                        this.isLoadingOver = true;
                        this.errorInfo = '';
                    } else {
                        this.isLoadingOver = true;
                        this.errorInfo = resp.message || 'error occurred while fetching products';
                        this.products = undefined
                    }
                },
                error: (err) => {
                    this.isLoadingOver = true;
                    this.errorInfo = err.message || 'error occurred while fetching products';
                    this.products = undefined;
                }
            }
        )
    }
}