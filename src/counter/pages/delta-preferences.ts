import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-delta-preference',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `<div>
    @for (delta of store.deltaPreferences; track delta) {
      <button
        [disabled]="store.delta() === delta"
        (click)="store.setDelta(delta)"
        class="join-item btn"
      >
        {{ delta }}
      </button>
    }
  </div>`,
  styles: ``,
})
export class DeltaPreferences {
  store = inject(CounterStore);
}
