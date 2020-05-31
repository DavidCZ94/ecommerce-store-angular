import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact.component';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule
    ]
})
export class ContactModule {}