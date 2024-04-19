import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full'

    },
    {
        path: 'products',
        loadComponent: () => import('@org/products').then((m) => m.ProductsComponent),
        pathMatch: 'full'
    },
    {
        path: 'orders',
        loadComponent: () => import('@org/orders').then((m) => m.OrdersComponent),
        pathMatch: 'full'
    }
];
