import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DemoService } from './demo-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-demos-service-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  providers: [DemoService],
  template: `
    <p>Service Stuff</p>
    <p>Hit Count {{ service.hits() }}</p>
    <p>Service was created {{ service.created | date: 'fullTime' }}</p>
    <button (click)="service.logHit()" class="btn btn-primary">Log Hit</button>
  `,
  styles: ``,
})
export class Page1 {
  service = inject(DemoService);
}
