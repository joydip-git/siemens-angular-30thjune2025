import { Observable } from "rxjs";
import { Product } from "../../models/product";
import { ApiResponse } from "../../models/api-response";

export interface IPmsService {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProduct(id: number): Observable<ApiResponse<Product>>;
    addProduct(p: Product): Observable<ApiResponse<Product[]>>;
    updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
    saveProduct(p: Product | undefined): void;
    productObservable: Observable<Product | undefined>;
}