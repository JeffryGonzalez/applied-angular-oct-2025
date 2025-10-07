import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DemoService } from './demo-service';

@Component({
  selector: 'app-page2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Hit Count: {{ service.hits() }}</p> `,
  styles: ``,
})
export class Page2 {
  service = inject(DemoService);
}
