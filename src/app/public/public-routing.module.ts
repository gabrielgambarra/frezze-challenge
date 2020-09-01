import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from '../security/login.guard';

export const PublicRoutes: Routes = [{
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
      }
    ]
  }
];