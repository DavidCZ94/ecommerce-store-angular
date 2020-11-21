import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        ContactRoutingModule,
        MaterialModule,
    ]
})
export class ContactModule {}