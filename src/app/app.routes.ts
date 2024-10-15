import { Routes } from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {LayoutComponent} from './admin/layout/layout.component';
import {ProductsComponent} from './admin/products/products.component';
import {CategoriesComponent} from './admin/categories/categories.component';
import {LandingComponent} from './website/landing/landing.component';
import {CategoryProductsComponent} from './website/category-products/category-products.component';
import {WebProductsComponent} from './website/web-products/web-products.component';
import {CustomerOrdersComponent} from './website/customer-orders/customer-orders.component';
import {CheckoutComponent} from './website/checkout/checkout.component';
import {CartComponent} from './admin/cart/cart.component';
import {authGuard} from './shared/guards/auth.guard';

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
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [authGuard],
    title: 'Checkout'
  },
  {
    path: 'order-history',
    component: CustomerOrdersComponent,
    canActivate: [authGuard],
    title: 'Your Orders'
  },
  {
      path: '',
      component: LayoutComponent,
      canActivate: [authGuard],
          children: [
            {
              path: 'products',
              component: ProductsComponent,
              title: 'Products'
            },
            {
              path: 'category',
              component: CategoriesComponent,
              title: 'Category'
            }
          ]
  }
];
