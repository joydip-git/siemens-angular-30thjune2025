import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';

@Pipe({
  name: 'filterProduct',
  standalone: false
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Product[], ...args: string[]): Product[] {
    return args && args.length > 0 && args[0] && args[0] !== '' ? value.filter(p => p.productName.toLowerCase().includes(args[0].toLowerCase())) : value;
  }
}
