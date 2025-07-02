import { HttpClient } from "@angular/common/http";
import { productRecords } from "../../data/products";
import { Product } from "../../models/product";
import { IPmsService } from "./productservice.contract";
import { Injectable } from "@angular/core";
import { PRODUCT_API_URL } from "../../config/constants";
import { ApiResponse } from "../../models/api-response";
import { Observable } from "rxjs";

//@Injectable({ providedIn: 'root' })
@Injectable()
export class ProductService implements IPmsService {

    // private readonly http: HttpClient;
    // constructor(http: HttpClient) {
    //     this.http = http;
    //  }
    constructor(private readonly http: HttpClient) {

    }
    getProduct(id: number): Observable<ApiResponse<Product>> {
        return this.http.get(`${PRODUCT_API_URL}/${id}`) as Observable<ApiResponse<Product>>;
    }
    addProduct(p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(PRODUCT_API_URL, p);
    }
    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`, p);
    }
    deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`);
    }
    getProducts(): Observable<ApiResponse<Product[]>> {
        const resp: Observable<ApiResponse<Product[]>> = this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
        return resp
    }
}