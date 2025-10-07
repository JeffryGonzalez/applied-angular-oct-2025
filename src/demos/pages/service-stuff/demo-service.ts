import { signal } from '@angular/core';

export class DemoService {
  readonly created: string;
  private _hits = signal(0);

  constructor() {
    this.created = new Date().toISOString();
    console.log('Demo Service Created', this.created);
  }

  hits = this._hits.asReadonly();
  logHit() {
    this._hits.update((h) => h + 1);
  }
}
