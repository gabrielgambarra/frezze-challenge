import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WelcomeComponent
      }
    ]
  }
];
