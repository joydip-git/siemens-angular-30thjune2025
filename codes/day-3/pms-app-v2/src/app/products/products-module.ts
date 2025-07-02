import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { PRODUCT_SERVICE, SERVICE_TOKEN } from '../config/constants';
import { ProductFilter } from './components/product-filter/product-filter';
import { ProductContainer } from './components/product-container/product-container';
import { FilterProductPipe } from './pipes/filter-product-pipe';

@NgModule({
  declarations: [
    ProductList,
    ProductFilter,
    ProductContainer,
    FilterProductPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductContainer],
  providers: [
    {
      provide: SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE
    }
  ],
})
export class ProductsModule { }
