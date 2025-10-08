import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterStore } from './stores/counter';
import { PrizeStore } from './stores/prize';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  providers: [CounterStore, PrizeStore],
  template: `
    <div class="flex flex-row gap-4">
      <a routerLink="ui" class="link">Ui</a>
      <a routerLink="prefs" class="link">Prefs</a>
    </div>
    @if (store.winner()) {
      <div class="alert alert-success">
        We have ourselves a power user here!
      </div>
    }
    <div class="m-4">
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class Counter {
  store = inject(PrizeStore);
}
