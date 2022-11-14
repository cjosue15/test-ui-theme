import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'analytics',
        loadComponent: () =>
          import('./pages/dashboard/analytics/analytics.component').then(
            (c) => c.AnalyticsComponent
          ),
      },
      {
        path: 'ecommerce',
        loadComponent: () =>
          import('./pages/dashboard/ecommerce/ecommerce.component').then(
            (c) => c.EcommerceComponent
          ),
      },
      {
        path: 'test',
        loadComponent: () =>
          import('./pages/dashboard/test/test.component').then(
            (c) => c.TestComponent
          ),
      },
    ],
  },
];

export const appRouting = [provideRouter(routes)];
