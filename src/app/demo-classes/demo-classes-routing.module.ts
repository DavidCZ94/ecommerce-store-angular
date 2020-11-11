import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoClassesComponent } from './components/demo-classes/demo-classes.component';

const routes: Routes = [
    {
        path: '',
        component: DemoClassesComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class DemoClassesRoutingModule {}