import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `<div>
    <a routerLink="ui" class="link">UI</a>
  </div>`,
  styles: ``,
})
export class Counter {}
