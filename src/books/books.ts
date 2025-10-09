import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNav } from '../shared/components/section-nav';
import { SectionNavLink } from '../shared/components/types';
import { BooksStore } from './stores/books';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SectionNav],
  providers: [BooksStore],
  template: `
    <app-section-nav
      sectionName="Useful Books"
      [links]="links()"
    ></app-section-nav>
    <router-outlet />
  `,
  styles: ``,
})
export class Books {
  //store = inject();

  links = signal<SectionNavLink[]>([
    {
      label: 'List',
      link: 'list',
      requiresLogin: false,
    },
    {
      label: 'Preferences',
      link: 'prefs',
      requiresLogin: false,
    },
  ]);
}
