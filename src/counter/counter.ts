import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterStore } from './stores/counterState';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CounterStore],
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex flex-row gap-4">
      <a class="link" routerLink="ui">UI</a>
      <a class="link" routerLink="prefs">Prefs</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class Counter {
  store = inject(CounterStore);
}
