import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoClassesComponent } from './components/demo-classes/demo-classes.component';

import { DemoClassesRoutingModule } from './demo-classes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        DemoClassesComponent,
    ],
    imports: [
        CommonModule,
        DemoClassesRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class DemoClassesModule {}
