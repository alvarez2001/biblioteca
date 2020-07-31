import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadosRoutingModule } from './invitados-routing.module';
import { InicioComponent } from '@app/components/invitado/inicio/inicio.component';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [
    InicioComponent,

  ],
  imports: [
    CommonModule,
    InvitadosRoutingModule,
    MaterialModule
  ]
})
export class InvitadosModule { }
