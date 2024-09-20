import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('users/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'products',
    loadChildren: () => import('products/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'ui',
    loadChildren: () => import('ui/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'basket',
    loadChildren: () => import('basket/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
