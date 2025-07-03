import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  standalone: false,
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css'
})
export class ProductFilter {
  @Output('filterTextChanged') filterValueChanged = new EventEmitter<string>();
  filterData = ''
  emitFilterValue(value: string): void {
    this.filterData = value;
    this.filterValueChanged.emit(this.filterData);
  }
}
