import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { PRODUCT_SERVICE, SERVICE_TOKEN } from '../config/constants';
import { ProductFilter } from './components/product-filter/product-filter';
import { ProductContainer } from './components/product-container/product-container';
import { FilterProductPipe } from './pipes/filter-product-pipe';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AddProduct } from './components/add-product/add-product';
import { UpdateProduct } from './components/update-product/update-product';
import { ViewProduct } from './components/view-product/view-product';
import { ProductsRoutingModule } from './products-routing-module';

@NgModule({
  declarations: [
    ProductList,
    ProductFilter,
    ProductContainer,
    FilterProductPipe,
    AddProduct,
    UpdateProduct,
    ViewProduct
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
    //HttpClientModule
  ],
  exports: [ProductContainer],
  providers: [
    {
      provide: SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE
    },
    provideHttpClient(),
  ],
})
export class ProductsModule { }
