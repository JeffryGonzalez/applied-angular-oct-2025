import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';
import { injectDispatch } from '@ngrx/signals/events';
import { counterPrefsEvents } from '../stores/actions';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join-group">
      @for (by of store.countByValues; track by) {
        <button
          (click)="events.setCountBy(by)"
          [disabled]="store.countBy() === by"
          class="join-item btn "
        >
          {{ by }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class Prefs {
  store = inject(CounterStore);
  events = injectDispatch(counterPrefsEvents);
}
