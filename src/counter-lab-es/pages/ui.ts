import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';
import { injectDispatch } from '@ngrx/signals/events';
import { counterUiEvents } from '../stores/actions';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>
    <button
      [disabled]="store.decrementShouldBeDisabled()"
      (click)="events.decremented()"
      class="btn btn-primary"
    >
      -
    </button>
    <span>{{ store.current() }}</span>
    <button (click)="events.incremented()" class="btn btn-primary">+</button>

    <div>
      @switch (store.fizzBuzz()) {
        @case ('FizzBuzz') {
          <div class="alert alert-success alert-dash">Fizz Buzz!</div>
        }
        @case ('Fizz') {
          <div class="alert alert-info alert-dash">Fizz!</div>
        }
        @case ('Buzz') {
          <div class="alert alert-warning alert-dash">Buzz!</div>
        }
      }
    </div>
  </div>`,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
  events = injectDispatch(counterUiEvents);
}
