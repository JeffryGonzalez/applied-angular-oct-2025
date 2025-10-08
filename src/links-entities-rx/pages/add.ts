import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-link-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Add a Link Here</p>
    <div class="alert alert-warning">
      <p>Only Logged In Users Can Add Links!</p>
    </div>
  `,
  styles: ``,
})
export class Add {}
