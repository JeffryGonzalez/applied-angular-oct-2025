import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GolfStore } from '../stores/golf';
@Component({
  selector: 'app-signals2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [GolfStore],
  template: `
    <p>Golfing with SignalStore</p>

    @if (store.par() === null) {
      <div class="join">
        @for (par of store.golfPar; track par) {
          <button
            [disabled]="store.par() === par"
            (click)="store.setPar(par)"
            class="join-item btn btn-sm"
          >
            {{ par }}
          </button>
        }
      </div>
    } @else {
      <p>Your Current Score is {{ store.strokeCount() }}</p>
      <p>Your Par is {{ store.par() }}</p>

      <div>
        <button (click)="store.takeASwing()" class="btn btn-primary">
          Take A Swing
        </button>
      </div>

      <div>
        <p>{{ store.getLevel() }}</p>
      </div>
    }
  `,
  styles: ``,
})
export class Signals2 {
  store = inject(GolfStore);
}
