import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductContainer } from "./components/product-container/product-container";
import { ViewProduct } from "./components/view-product/view-product";
import { UpdateProduct } from "./components/update-product/update-product";
import { AddProduct } from "./components/add-product/add-product";

// const productsRoutes: Routes = [
//     {
//         path: 'products', component: ProductContainer
//     },
//     {
//         path: 'products/view/:id', component: ViewProduct
//     },
//     {
//         path: 'products/update/:id', component: UpdateProduct
//     },
//     {
//         path: 'products/add', component: AddProduct
//     }
// ]

const productsRoutes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '', component: ProductContainer
            },
            {
                path: 'view/:id', component: ViewProduct
            },
            {
                path: 'update/:id', component: UpdateProduct
            },
            {
                path: 'add', component: AddProduct
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {

}