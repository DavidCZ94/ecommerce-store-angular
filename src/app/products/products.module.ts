import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainer } from './containers/products-component/products.container';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './Components/product/product.component';

import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';


@NgModule({
    declarations: [
        ProductsContainer,
        ProductComponent,
        ProductDetailComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        ProductsRoutingModule,
        MaterialModule
    ]
})

export class ProductsModule{}
