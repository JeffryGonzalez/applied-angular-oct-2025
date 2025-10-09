import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counterState';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="join">
    <button
      (click)="store.changeCountBy(1)"
      [disabled]="store.countBy() === 1"
      class="btn btn-ghost join-item"
    >
      Increment by 1
    </button>
    <button
      (click)="store.changeCountBy(3)"
      [disabled]="store.countBy() === 3"
      class="btn btn-ghost join-item"
    >
      Increment by 3
    </button>
    <button
      (click)="store.changeCountBy(5)"
      [disabled]="store.countBy() === 5"
      class="btn btn-ghost join-item"
    >
      Increment by 5
    </button>
  </div>`,
  styles: ``,
})
export class Prefs {
  store = inject(CounterStore);
}
