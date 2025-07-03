import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { IPmsService } from '../../services/productservice.contract';
import { SERVICE_TOKEN } from '../../../config/constants';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-view-product',
  standalone: false,
  templateUrl: './view-product.html',
  styleUrl: './view-product.css'
})
export class ViewProduct implements OnInit {
  private sub?: Subscription;
  isLoadingOver = false;
  errorInfo = ''
  product?: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(SERVICE_TOKEN) private ps: IPmsService
  ) {

  }
  ngOnInit(): void {
    //this.route.params
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    const params: Params = snapshot.params;
    //const id = Number(params['id'])
    //const id = parseInt(params['id'])
    const id = (+params['id'])
    this.sub = this.ps
      .getProduct(id)
      .subscribe({
        next: (resp) => {
          if (resp.data !== null) {
            this.product = resp.data
            this.ps.saveProduct(resp.data)
            this.isLoadingOver = true
            this.errorInfo = ''
          } else {
            this.product = undefined
            this.ps.saveProduct(undefined)
            this.isLoadingOver = true
            this.errorInfo = resp.message
          }
        },
        error: (err) => {
          this.product = undefined
          this.ps.saveProduct(undefined)
          this.isLoadingOver = true
          this.errorInfo = err.message
        }
      })
  }
  goToUpdate(id: number) {
    this.router.navigate(['/products/update', id])
  }
}
