import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoClassesComponent } from './demo-classes/components/demo-classes/demo-classes.component';
import { ProductDetailComponent } from './products/Components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';
import { NotFoundModule } from './not-found/not-found.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // with the next line we load a complete module
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then( m => m.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then( m => m.OrderModule),
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo-classes/demo-classes.module').then( m => m.DemoClassesModule),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
      },
       {
        path: '**',
        loadChildren: () => import('./not-found/not-found.module').then( m => NotFoundModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
