import { Routes } from '@angular/router';
import { PublicComponent } from 'src/app/public/public.component';
import { AdminGuard } from 'src/app/security/admin.guard';
import { LoginGuard } from 'src/app/security/login.guard';
import { NavigationComponent } from './shared/navigation/navigation.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./private/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'new-order',
        loadChildren: () => import('./private/order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {
    path: 'public',
    component: PublicComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      }
    ]
  }
];
