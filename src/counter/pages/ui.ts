import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>
    <div class="w-2xs pb-2 pt-2" [innerHTML]="store.fizzBuzz()"></div>
    <button
      [disabled]="store.decrementShouldBeDisabled()"
      (click)="store.decrement()"
      class="btn btn-primary"
    >
      -
    </button>
    <span>{{ current() }}</span>
    <button (click)="store.increment()" class="btn btn-primary">+</button>
  </div>`,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
  current = this.store.current;
}
