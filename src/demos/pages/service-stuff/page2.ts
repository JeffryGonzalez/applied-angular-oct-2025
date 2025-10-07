import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DemoService } from '../../../shared/demo-service';

@Component({
  selector: 'app-page2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [],
  template: ` <p>Hit Count: {{ service.hits() }}</p> `,
  styles: ``,
})
export class Page2 {
  service = inject(DemoService);
}
