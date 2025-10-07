import { Component, inject } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { DemoService } from '../shared/demo-service';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar />
    <main class="container mx-auto">
      <router-outlet />
    </main>
    <footer>
      <p>Hit Count {{ service.hits() }}</p>
    </footer>
  `,
  styles: [],
  imports: [Navbar, RouterOutlet],
})
export class App {
  service = inject(DemoService);
}
