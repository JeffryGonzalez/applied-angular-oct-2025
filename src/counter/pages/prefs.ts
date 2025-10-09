import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-unique-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `
    <div class="prefs-container">
      @for (step of store['stepValues']; track step) {
        <button
          [disabled]="store['step']() === step"
          (click)="store['updateBy'](step)"
          class="prefs-button"
        >
          {{ step }}
        </button>
      }
    </div>
  `,
  styles: [
    `
      .prefs-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 20px 0;
      }

      .prefs-button {
        background: linear-gradient(135deg, #12c2e9, #c471ed, #f64f59);
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition:
          transform 0.2s,
          box-shadow 0.2s;
      }

      .prefs-button:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 15px rgba(246, 79, 89, 0.5);
      }

      .prefs-button:disabled {
        background: #bbb;
        cursor: not-allowed;
      }
    `,
  ],
})
export class UniquePrefs {
  store = inject(CounterStore);
}
