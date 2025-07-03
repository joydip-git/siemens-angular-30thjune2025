import { Component } from '@angular/core';

@Component({
  selector: 'app-product-container',
  standalone: false,
  templateUrl: './product-container.html',
  styleUrl: './product-container.css'
})
export class ProductContainer {
  filterValue = ''
  receiveFilterText(text: string): void {
    this.filterValue = text;
    console.log(this.filterValue);
  }
}
