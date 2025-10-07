import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-demos-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],

  template: `
    <p>Golf Score</p>

    @if (par() === null) {
      <div class="join">
        <button
          [disabled]="par() === 3"
          (click)="par.set(3)"
          class="join-item btn btn-sm"
        >
          3
        </button>
        <button
          [disabled]="par() === 4"
          (click)="par.set(4)"
          class="join-item btn btn-sm"
        >
          4
        </button>
        <button
          [disabled]="par() === 5"
          (click)="reset()"
          class="join-item btn btn-sm"
        >
          5
        </button>
      </div>
    } @else {
      <div>
        <span>{{ strokeCount() }}</span>

        <button (click)="addStroke()" class="btn btn-sm btn-circle">+</button>
      </div>

      <div>
        <button
          [disabled]="atZero()"
          (click)="strokeCount.set(0)"
          class="btn btn-warning"
        >
          Reset
        </button>
      </div>

      <div>
        <p>The par is {{ par() }}</p>
        @switch (level()) {
          @case ('') {
            <p>Nothing</p>
          }
          @case ('Birdie') {
            <p>You are at Birdie!</p>
          }
          @case ('Eagle') {
            <p>EAGLE HAS LANDED!</p>
          }
          @case ('Ouch') {
            <p>Maybe just go back to the club and get a drink?</p>
          }
          @case ('Par') {
            <p>You are at par!</p>
          }
        }
      </div>
    }
  `,
  styles: ``,
})
export class Signals {
  strokeCount = signal(0);
  par = signal<3 | 4 | 5 | null>(null);
  atZero = computed(() => {
    return this.strokeCount() === 0;
  });

  reset() {
    this.par.set(null);
    this.strokeCount.set(0);
  }
  addStroke() {
    // this.strokeCount.set(this.strokeCount() + 1);
    this.strokeCount.update((oldCount) => oldCount + 1);
  }

  level = computed(() => {
    const par = this.par();
    const strokes = this.strokeCount();

    if (par === null) {
      return '';
    }

    const diff = strokes - par;

    if (diff === 0) {
      return 'Par';
    }
    if (diff === -1) {
      return 'Birdie';
    }
    if (diff === -2) {
      return 'Eagle';
    }
    if (diff == 1) {
      return 'Bogey';
    }
    if (diff > 4) {
      return 'Ouch';
    }
    return '';
  });
}
