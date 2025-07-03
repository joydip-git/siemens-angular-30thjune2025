import { Component, Inject, OnInit } from '@angular/core';
import { IPmsService } from '../../services/productservice.contract';
import { SERVICE_TOKEN } from '../../../config/constants';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-update-product',
  standalone: false,
  templateUrl: './update-product.html',
  styleUrl: './update-product.css'
})
export class UpdateProduct implements OnInit {
  isLoadingOver = false;
  errorInfo = ''
  product?: Product;

  constructor(@Inject(SERVICE_TOKEN) private ps: IPmsService) {

  }
  ngOnInit(): void {
    this.ps.productObservable.subscribe(
      (p) => {
        if (p) {
          this.product = p
          this.isLoadingOver = true
          this.errorInfo = ''
        } else {
          this.product = undefined
          this.isLoadingOver = true
          this.errorInfo = 'no product found...'
        }
      }
    )
  }
}
