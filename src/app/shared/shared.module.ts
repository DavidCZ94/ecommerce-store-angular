import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HigjlightDirective } from './directives/higjlight/higjlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../material/material.module';
import { GroupCartProductsPipe } from './pipes/groupCartProducts/group-cart-products.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HigjlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupCartProductsPipe
  ],
  exports: [
    ExponentialPipe,
    HigjlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupCartProductsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
