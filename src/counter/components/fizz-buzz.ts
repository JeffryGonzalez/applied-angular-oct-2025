import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-unique-counter-fizzbuzz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="fizzbuzz-container">
      @switch (store['fizzBuzz']()) {
        @case ('FizzBuzz') {
          <div class="fizzbuzz fizzbuzz-fizzbuzz">FizzBuzz!</div>
        }
        @case ('Fizz') {
          <div class="fizzbuzz fizzbuzz-fizz">Fizz!</div>
        }
        @case ('Buzz') {
          <div class="fizzbuzz fizzbuzz-buzz">Buzz!</div>
        }
        @default {
          <div class="fizzbuzz fizzbuzz-none">No FizzBuzz</div>
        }
      }
    </div>
  `,
  styles: [
    `
      .fizzbuzz-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
      }

      .fizzbuzz {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 8px;
        color: white;
        animation: pop 0.5s ease-in-out;
      }

      .fizzbuzz-fizzbuzz {
        background: linear-gradient(45deg, #ff7eb3, #ff758c);
        box-shadow: 0px 4px 15px rgba(255, 117, 140, 0.5);
      }

      .fizzbuzz-fizz {
        background: linear-gradient(45deg, #6a11cb, #2575fc);
        box-shadow: 0px 4px 15px rgba(37, 117, 252, 0.5);
      }

      .fizzbuzz-buzz {
        background: linear-gradient(45deg, #ff9a8b, #ff6a88);
        box-shadow: 0px 4px 15px rgba(255, 106, 136, 0.5);
      }

      .fizzbuzz-none {
        background: linear-gradient(45deg, #ddd, #bbb);
        color: #666;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      }

      @keyframes pop {
        0% {
          transform: scale(0.8);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class UniqueFizzBuzz {
  store = inject(CounterStore);
}
