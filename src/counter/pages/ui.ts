import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';
import { DeltaPreferences } from './delta-preferences';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DeltaPreferences],
  template: `
    <div>
      <button
        class="btn btn-primary"
        [disabled]="store.disableDecrement()"
        (click)="store.decrement()"
      >
        -
      </button>
      <span>{{ store.counter() }}</span>
      <button class="btn btn-primary" (click)="store.increment()">+</button>
    </div>
    <div>
      <p>Current Description: {{ store.description() }}</p>
    </div>
    <app-delta-preference />
  `,
  styles: ``,
})
export class CounterUI {
  store = inject(CounterStore);
  //   counter = signal(0);
  //   deltaAmount = signal(1);
  //   description = signal('hi');
  //   historicalDescription = signal(['Start:']);
  //   runMath = (deltaType: '-' | '+') => {
  //     const deltaNumber: number = this.deltaAmount();
  //     switch (deltaType) {
  //       case '-':
  //         this.counter.update((c) => c - deltaNumber);
  //         break;
  //       case '+':
  //         this.counter.update((c) => c + deltaNumber);
  //         break;
  //     }
  //   };
  //   decrement = () => {
  //     if (this.isGreaterThanZero()) {
  //       this.runMath('-');
  //     }
  //   };
  //   increment = () => {
  //     this.runMath('+');
  //     this.checkFizzBuzz();
  //   };
  //   isGreaterThanZero = computed(() => this.counter() > 0);
  //   shouldFizz = computed(() => this.counter() % 3 === 0);
  //   shouldBuzz = computed(() => this.counter() % 5 === 0);
  //   checkFizzBuzz = () => {
  //     const des =
  //       this.shouldFizz() && this.shouldBuzz()
  //         ? 'FizzyBuzzy'
  //         : this.shouldFizz()
  //           ? 'Fizz'
  //           : this.shouldBuzz()
  //             ? 'Buzz'
  //             : this.counter().toString();
  //     this.description.update(() => des);
  //   };
}
