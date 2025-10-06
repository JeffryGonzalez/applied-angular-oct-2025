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
  `,
  styles: ``,
})
export class Signals {
  strokeCount = signal(0);

  atZero = computed(() => {
    return this.strokeCount() === 0;
  });
  addStroke() {
    // this.strokeCount.set(this.strokeCount() + 1);
    this.strokeCount.update((oldCount) => oldCount + 1);
  }
}
