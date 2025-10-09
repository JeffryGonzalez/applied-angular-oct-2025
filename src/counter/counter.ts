import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-unique-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  providers: [],
  template: `
    <div class="nav-container">
      <a routerLink="ui" class="nav-link">UI</a>
      <a routerLink="prefs" class="nav-link">Preferences</a>
    </div>
    <div class="outlet-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      /* Navigation container with a modern layout */
      .nav-container {
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding: 1rem 0;
        background: linear-gradient(90deg, #36d1dc, #5b86e5);
        border-radius: 8px;
        margin-bottom: 1rem;
      }

      /* Navigation links with cool hover effects */
      .nav-link {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        transition:
          transform 0.2s,
          box-shadow 0.2s;
      }

      .nav-link:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 15px rgba(91, 134, 229, 0.5);
      }

      /* Outlet container for displaying child routes */
      .outlet-container {
        padding: 1rem;
        background: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class UniqueCounter {}
