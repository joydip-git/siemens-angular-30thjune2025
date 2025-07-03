import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  standalone: false,
  templateUrl: './view-product.html',
  styleUrl: './view-product.css'
})
export class ViewProduct {
  constructor(private router: Router) {

  }
  goToUpdate() {
    this.router.navigate(['/products/update', 2])
  }
}
