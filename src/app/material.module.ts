import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';


import { RegAreaComponent } from '@admin/vista-modulo-libros/reg-area/reg-area.component';

import { CargandoComponent } from './shared/cargando/cargando.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';

import { CommonModule } from '@angular/common';
import { RegIdiomaComponent } from './components/admin/modulos-extras/idioma/reg-idioma/reg-idioma.component';
import { RegFormatoComponent } from './components/admin/modulos-extras/formatos/reg-formato/reg-formato.component';
import { RegClasificacionComponent } from './components/admin/modulos-extras/clasificaciones/reg-clasificacion/reg-clasificacion.component';





@NgModule({
  declarations: [CargandoComponent, NavegacionComponent,RegAreaComponent, RegIdiomaComponent, RegFormatoComponent, RegClasificacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  exports:[
    RegAreaComponent,
    CargandoComponent,
    NavegacionComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
  ]
})
export class MaterialModule { }
