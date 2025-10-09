import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { UniqueFizzBuzz } from '../components/fizz-buzz';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-unique-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UniqueFizzBuzz],
  template: `
    <div class="ui-container">
      <button
        [disabled]="store['canDecrement']()"
        (click)="store['decrease']()"
        class="ui-button"
      >
        -
      </button>
      <span class="ui-counter">{{ store['current']() }}</span>
      <button (click)="store['increase']()" class="ui-button">+</button>
      <div>
        <app-unique-counter-fizzbuzz />
      </div>
    </div>
  `,
  styles: [
    `
      .ui-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 20px;
      }

      .ui-button {
        background: linear-gradient(45deg, #ff416c, #ff4b2b);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        cursor: pointer;
        transition:
          transform 0.2s,
          box-shadow 0.2s;
      }

      .ui-button:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 15px rgba(255, 75, 43, 0.5);
      }

      .ui-counter {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
      }
    `,
  ],
})
export class UniqueUi {
  store = inject(CounterStore);
}
