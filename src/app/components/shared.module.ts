import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmarLogoutComponent } from './confirmar-logout/confirmar-logout.component';
import { MaterialModule } from '../material/material.module';
import { DatePipe } from '../pipes/date.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmarLogoutComponent,
    DatePipe
  ],
  imports: [
    MaterialModule
    
  ],
  exports: [
    NavbarComponent,
    ConfirmarLogoutComponent,
    DatePipe
  ],
})
export class SharedModule { }
