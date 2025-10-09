import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../../counter-lab/stores/counter';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>
    <button
      [disabled]="store.decrementShouldBeDisabled()"
      (click)="store.decrement()"
      class="btn btn-primary"
    >
      -
    </button>
    <span>{{ store.current() }}</span>
    <button (click)="store.increment()" class="btn btn-primary">+</button>
  </div>`,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
}
