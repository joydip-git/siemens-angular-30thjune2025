import { HttpClient } from "@angular/common/http";
import { productRecords } from "../../data/products";
import { Product } from "../../models/product";
import { IProductService } from "./productservice.contract";
import { Injectable } from "@angular/core";

//@Injectable({ providedIn: 'root' })
@Injectable()
export class ProductService implements IProductService {

    // private readonly http: HttpClient;
    // constructor(http: HttpClient) {
    //     this.http = http;
    //  }
    constructor(private readonly http: HttpClient) {

    }

    getProducts(): Product[] {
        this.http.get()
        return [...productRecords];
    }
}