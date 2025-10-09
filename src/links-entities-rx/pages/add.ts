import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LinksStore } from '../stores/links';
import { ApiLinkCreateItem } from '../types';
@Component({
  selector: 'app-link-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="addLink()">
      <div>
        <label for="title">Title</label>
        <input class="input" type="text" name="title" formControlName="title" />
      </div>
      <div>
        <label for="description">Description</label>
        <input
          class="input"
          type="text"
          name="description"
          formControlName="description"
        />
      </div>
      <div>
        <label for="link">Link</label>
        <input class="input" type="text" name="link" formControlName="link" />
      </div>
      <button type="submit" class="btn btn-primary">Add This Link</button>
    </form>
  `,
  styles: ``,
})
export class Add {
  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)],
    }),
    description: new FormControl('', { nonNullable: true }),
    link: new FormControl('', { nonNullable: true }),
  });

  store = inject(LinksStore);
  addLink() {
    if (this.form.valid) {
      // call a method on our store...
      const linkToAdd = this.form.value as ApiLinkCreateItem;
      this.store.addLink(linkToAdd);
      this.form.reset();
    }
  }
}
