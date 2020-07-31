import { MaterialModule } from '@app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { RegLibroComponent } from '@admin/reg-libro/reg-libro.component';
import { RegAutorComponent } from '@admin/reg-libro/reg-autor/reg-autor.component';
import { RegEditorialComponent } from '@admin/reg-libro/reg-editorial/reg-editorial.component';
import { RegMateriaComponent } from '@admin/reg-libro/reg-materia/reg-materia.component';
import { VistaModuloLibrosComponent } from '@admin/vista-modulo-libros/vista-modulo-libros.component';
import { ListarLibrosAdminComponent } from '@admin/vista-modulo-libros/listar-libros-admin/listar-libros-admin.component';

import { UnLibroComponent } from '@admin/vista-modulo-libros/un-libro/un-libro.component';
import { RegGeneroComponent } from '@admin/reg-libro/reg-genero/reg-genero.component';
import { RegValoracionComponent } from '@admin/reg-libro/reg-valoracion/reg-valoracion.component';
import { RegColeccionComponent } from '@admin/reg-libro/reg-coleccion/reg-coleccion.component';
import { RegTipoLibroComponent } from '@admin/reg-libro/reg-tipo-libro/reg-tipo-libro.component';

import { StatusLibroComponent } from '@admin/vista-modulo-libros/status-libro/status-libro.component';
import { ChangeStatusComponent } from '@admin/vista-modulo-libros/status-libro/change-status/change-status.component';
import { ChangeImageComponent } from '@app/components/admin/vista-modulo-libros/status-libro/change-image/change-image.component';


@NgModule({
  declarations: [
    RegLibroComponent,
    RegAutorComponent,
    RegEditorialComponent,
    RegMateriaComponent,
    VistaModuloLibrosComponent,
    ListarLibrosAdminComponent,

    UnLibroComponent,
    RegGeneroComponent,
    RegValoracionComponent,
    RegColeccionComponent,
    RegTipoLibroComponent,
    StatusLibroComponent,
    ChangeStatusComponent,
    ChangeImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
