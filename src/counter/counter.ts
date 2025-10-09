import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="">
      <button class="btn btn-secondary join-item">
        <a routerLink="ui" class="link">UI</a>
      </button>
      <button class="btn btn-secondary join-item">
        <a routerLink="prefs" class="link">Pref</a>
      </button>
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class Counter {}
