import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../store/counter-store';
import { Fizzbuzz } from './fizzbuzz';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Fizzbuzz],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="store.subtract()"
        [disabled]="store.atZero()"
      >
        -
      </button>
      <span>{{ store.currentCount() }}</span>
      <button class="btn btn-primary" (click)="store.add()">+</button>
    </div>
    <app-fizzbuzz></app-fizzbuzz>
  `,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
}
