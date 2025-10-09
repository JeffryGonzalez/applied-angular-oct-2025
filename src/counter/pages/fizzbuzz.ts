import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../store/counter-store';

@Component({
  selector: 'app-fizzbuzz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @switch (store.fizzBuzz()) {
      @case ('FizzBuzz') {
        <div role="alert" class="alert alert-success">
          <span>FizzBuzz</span>
        </div>
      }
      @case ('Fizz') {
        <div role="alert" class="alert alert-info">
          <span>Fizz</span>
        </div>
      }
      @case ('Buzz') {
        <div role="alert" class="alert alert-warning">
          <span>Buzz</span>
        </div>
      }
      @default {}
    }
  `,
  styles: ``,
})
export class Fizzbuzz {
  store = inject(CounterStore);
}
