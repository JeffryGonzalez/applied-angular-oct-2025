import { Routes } from '@angular/router';
import { Demos } from './demos';
import { Page1 } from './pages/service-stuff/page1';
import { Page2 } from './pages/service-stuff/page2';
import { Signals } from './pages/signals';
import { Signals2 } from './pages/signals2';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: Demos,
    providers: [], // This means this service can be provided to all the routes here. They will all share an instance.
    // It will not be "created" until the first time it is injected.
    // It will NEVER be destroyed (it will stay in memory as long as your application is running in the browser.)
    children: [
      {
        path: 'signals',
        component: Signals,
      },
      {
        path: 'signals2',
        component: Signals2,
      },
      {
        path: 'services',
        component: Page1,
      },
      { path: 'services2', component: Page2 },
    ],
  },
];
