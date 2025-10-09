import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../store/counter-store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @for (pref of store.countByValues; track pref) {
      <button
        [disabled]="store.countBy() === pref"
        (click)="store.setCountBy(pref)"
        class="join-item btn"
      >
        {{ pref }}
      </button>
    }
  `,
  styles: ``,
})
export class Prefs {
  store = inject(CounterStore);
}
