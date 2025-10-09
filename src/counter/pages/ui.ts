import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Fizzbuzz } from './fizz-buzz';
import { CounterStore } from '../stores/counterState';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Fizzbuzz],
  template: `
    <div>
      <button
        [disabled]="store.atZero()"
        (click)="store.decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ store.count() }}</span>
      <button (click)="store.increment()" class="btn btn-primary">+</button>
      <app-fizz-buzz [fizzBuzz]="store.fizzBuzz()" />
    </div>
  `,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
}
