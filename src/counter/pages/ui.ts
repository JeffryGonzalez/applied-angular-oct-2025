import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>
    <button
      [disabled]="zero()"
      (click)="decreaseCount()"
      class="btn btn-primary"
    >
      -
    </button>
    <span>{{ count() }}</span>
    <button (click)="addCount()" class="btn btn-primary">+</button>
    <div>
      @switch (fizzBuzz()) {
        @case ('FizzBuzz') {
          <div role="alert" class=" alert alert-success">FizzBuzz</div>
        }
        @case ('Fizz') {
          <div role="alert" class="alert alert-warning">Fizz</div>
        }
        @case ('Buzz') {
          <div role="alert" class="alert alert-error">Fizz</div>
        }
      }
    </div>
  </div>`,
  styles: ``,
})
export class Ui {
  count = signal(0);
  zero = computed(() => {
    return this.count() === 0;
  });

  addCount() {
    this.count.update((a) => a + 1);
  }

  decreaseCount() {
    this.count.update((d) => d - 1);
  }

  fizzBuzz = computed(() => {
    const currentNumber = this.count();
    //console.log(currentNumber);
    if (currentNumber === 0) {
      return '';
    }

    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(54);
      return 'FizzBuzz';
    }
    if (currentNumber % 3 === 0) {
      return 'Fizz';
    }
    if (currentNumber % 5 === 0) {
      return 'Buzz';
    }
    return '';
  });
}
