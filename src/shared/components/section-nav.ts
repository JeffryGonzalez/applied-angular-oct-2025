import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { SectionNavLink } from './types';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthStore } from '../auth/stores/auth';

@Component({
  selector: 'app-section-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="navbar bg-base shadow-sm my-8">
      @if (sectionName()) {
        <a routerLink="." class="btn btn-ghost text-xl">{{ sectionName() }}</a>
      }
      <ul class="menu menu-horizontal px-4">
        @for (link of links(); track link.link) {
          <li>
            @if (true) {
              <a [routerLinkActive]="['underline']" [routerLink]="link.link">{{
                link.label
              }}</a>
            }
          </li>
        }
      </ul>
    </div>
    <ng-content></ng-content>
    <router-outlet />
  `,
  styles: ``,
})
export class SectionNav {
  sectionName = input<string | undefined>(undefined);
  links = input.required<SectionNavLink[]>();
  authStore = inject(AuthStore);

  getAuthorizedLinks = computed(() => {
    const authedLinks = this.links().filter(
      (link) => link.requiresLogin && this.authStore.isLoggedIn(),
    );
    return authedLinks;
  });
  getAnonLinks = computed(() => {
    return this.links().filter((link) => link.requiresLogin === false);
  });
  linkList = computed(() => {
    return [...this.getAuthorizedLinks(), ...this.getAnonLinks()];
  });
}
