import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DemoService } from '../../../shared/demo-service';

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
