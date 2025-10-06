import { Component } from '@angular/core';

import { Welcome } from './components/welcome.component';

@Component({
  selector: 'app-root',
  template: `
    <main class="container mx-auto">
      <app-welcome />
    </main>
  `,
  styles: [],
  imports: [Welcome],
})
export class App {}
