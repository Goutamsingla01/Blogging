import { Routes } from '@angular/router';
import { Blog1Component } from './mycomponents/blog1/blog1.component';

export const routes: Routes = [
    {
        path: 'lessons-learned',
        component: Blog1Component, // this is the component with the <router-outlet> in the template
      },
  { path: '',   redirectTo: '/lessons-learned', pathMatch: 'full' },
  { path: '**',   redirectTo: '/lessons-learned', pathMatch: 'full' },
];
