import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-pref',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `
    <div class="join">
      @for (by of store.countByValues; track by) {
        <button
          [disabled]="store.by() === by"
          (click)="store.setBy(by)"
          class="join-item btn"
        >
          {{ by }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class Pref {
  store = inject(CounterStore);
}
