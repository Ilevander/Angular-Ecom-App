import { Routes } from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {LayoutComponent} from './admin/layout/layout.component';
import {ProductsComponent} from './admin/products/products.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {LandingComponent} from './website/landing/landing.component';
import {CategoryProductsComponent} from './website/category-products/category-products.component';
import {WebProductsComponent} from './website/web-products/web-products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'AllProducts',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'AllProducts',
        component: WebProductsComponent,
        title: 'All-Products'
      },
      {
        path: 'products/:id',
        component: CategoryProductsComponent,
      },
    ]
  },
  {
      path: '',
      component: LayoutComponent,
          children: [
            {
              path: 'products',
              component: ProductsComponent,
              title: 'Products'
            },
            {
              path: 'category',
              component: CategoriesComponent
            }
          ]
  }
];
