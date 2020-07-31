import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { InicioComponent } from '@admin/inicio/inicio.component';

import { SidenavComponent } from '@admin/sidenav/sidenav.component';
import { NavbarComponent } from '@admin/navbar/navbar.component';
import { CPanelComponent } from '@admin/c-panel/c-panel.component';
import { MaterialModule } from '@app/material.module';

import { CPanelRoutingModule } from '@app/modules/c-panel/c-panel-routing.module';
import { LibrosModule } from './libros/libros.module';
import { VistaModuloComponent } from '@admin/modulos-extras/vista-modulo.component';
import { ExtrasModule } from './extras/extras.module';


@NgModule({
  declarations: [
    CPanelComponent,
    InicioComponent,
    SidenavComponent,
    NavbarComponent,
    VistaModuloComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibrosModule,
    CPanelRoutingModule,
  ]
})
export class CPanelModule { }
