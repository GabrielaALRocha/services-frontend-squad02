import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmarLogoutComponent } from './confirmar-logout/confirmar-logout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmarLogoutComponent
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    ConfirmarLogoutComponent
  ],
})
export class SharedModule { }
