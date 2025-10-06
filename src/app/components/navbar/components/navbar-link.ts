import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarLink } from '../types';

@Component({
  selector: 'app-navbar-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a [routerLink]="link().path" routerLinkActive="underline">{{
      link().label
    }}</a>
  `,
  styles: ``,
})
export class NavLink {
  link = input.required<NavbarLink>();
}
