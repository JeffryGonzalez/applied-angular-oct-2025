import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-login-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @if (isLoggedIn()) {
      <button (click)="logout()" class="btn btn-primary">
        Logout {{ userName() }}
      </button>
    } @else {
      <button (click)="login()" class="btn btn-primary">Login</button>
    }
  `,
  styles: ``,
})
export class LoginState {
  isLoggedIn = signal(false);
  userName = signal<string | null>(null);

  login() {
    this.isLoggedIn.set(true);
    this.userName.set('Joe Schmidt');
  }
  logout() {
    this.isLoggedIn.set(false);
    this.userName.set(null);
  }
}
