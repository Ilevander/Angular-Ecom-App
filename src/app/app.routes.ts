import { Routes } from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {LayoutComponent} from './admin/layout/layout.component';
import {ProductsComponent} from './admin/products/products.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {LandingComponent} from './website/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'shop',
    component: LandingComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'category',
        component: CategoriesComponent
      }
    ]
  }
];
