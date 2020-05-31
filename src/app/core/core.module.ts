import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsService } from './services/products/produts.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProdutsService
  ]
})
export class CoreModule { }
