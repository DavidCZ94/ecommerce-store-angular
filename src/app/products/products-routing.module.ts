import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductsContainer } from './containers/products-component/products.container';

const routes: Routes = [
    {
        path: '',
        component: ProductsContainer
    },
    {
        path: ':id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule,
    ]
})
export class ProductsRoutingModule {}