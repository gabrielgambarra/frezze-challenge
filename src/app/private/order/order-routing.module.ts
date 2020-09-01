import { Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';

export const OrderRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: NewOrderComponent
            }
        ]
    }
];
