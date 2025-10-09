import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarCenter } from './components/navbar-center';
import { NavbarSide } from './components/navbar-side';
import { NavbarLink } from './types';
import { NavbarHamburger } from './components/navbar-hamburger';
import { LoginState } from './components/login-state';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NavbarCenter, NavbarSide, NavbarHamburger, LoginState],
  template: `
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <app-navbar-hamburger-menu />
          </div>
          <app-navbar-side [links]="links()" />
        </div>
        <a routerLink="/" class="btn btn-ghost text-xl">Applied Angular</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <app-navbar-center [links]="links()" />
      </div>
      <div class="navbar-end">
        <app-login-status />
      </div>
    </div>
  `,
  styles: ``,
})
export class Navbar {
  links = signal<NavbarLink[]>([
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Demos',
      path: '/demos',
    },
    {
      label: 'Useful Links',
      path: '/links',
    },
    {
      label: 'Useful Links RX',
      path: '/links-rx',
    },
    {
      label: 'Counter Lab',
      path: '/counter-lab',
    },
    {
      label: 'Counter Lab Events',
      path: '/counter-lab-es',
    },
    {
      label: 'Support',
      path: '/support',
    },
  ]);
}
