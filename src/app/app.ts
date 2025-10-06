import { Component } from '@angular/core';
import { Navbar } from './components/navbar';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar />
    <main class="container mx-auto"></main>
  `,
  styles: [],
  imports: [Navbar],
})
export class App {}
