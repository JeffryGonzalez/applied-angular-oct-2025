import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'era',
})
export class Era implements PipeTransform {
  transform(value: number): string {
    if (!value) return '';
    return value < 0 ? Math.abs(value) + ' BC' : value + ' AD';
  }
}
