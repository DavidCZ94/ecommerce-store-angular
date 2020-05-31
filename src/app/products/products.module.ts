import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './Components/products-component/products.component';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        ProductsRoutingModule
    ]
})

export class ProductsModule{}
