import { MaterialModule } from '@app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from '@admin/modulos-extras/usuarios/usuarios.component';
import { AreasComponent } from '@admin/modulos-extras/areas/areas.component';
import { ExtrasModuleRouting } from './extras-routing.module';
import { EditarAreaComponent } from '@admin/modulos-extras/areas/editar-area/editar-area.component';
import { AutoresComponent } from '@admin/modulos-extras/autores/autores.component';
import { EditarAutorComponent } from '@admin/modulos-extras/autores/editar-autor/editar-autor.component';
import { TiposdelibroComponent } from '../../../components/admin/modulos-extras/tiposdelibro/tiposdelibro.component';
import { EditarTipoComponent } from '../../../components/admin/modulos-extras/tiposdelibro/editar-tipo/editar-tipo.component';
import { EditorialesComponent } from '../../../components/admin/modulos-extras/editoriales/editoriales.component';
import { ModificarEditorialComponent } from '../../../components/admin/modulos-extras/editoriales/modificar-editorial/modificar-editorial.component';
import { ColeccionComponent } from '../../../components/admin/modulos-extras/coleccion/coleccion.component';
import { EditarColeccionComponent } from '../../../components/admin/modulos-extras/coleccion/editar-coleccion/editar-coleccion.component';
import { MateriasComponent } from '../../../components/admin/modulos-extras/materias/materias.component';
import { EditarMateriasComponent } from '../../../components/admin/modulos-extras/materias/editar-materias/editar-materias.component';
import { IdiomaComponent } from '../../../components/admin/modulos-extras/idioma/idioma.component';
import { EditarIdiomaComponent } from '../../../components/admin/modulos-extras/idioma/editar-idioma/editar-idioma.component';
import { FormatosComponent } from '../../../components/admin/modulos-extras/formatos/formatos.component';
import { EditarFormatoComponent } from '../../../components/admin/modulos-extras/formatos/editar-formato/editar-formato.component';
import { ClasificacionesComponent } from '../../../components/admin/modulos-extras/clasificaciones/clasificaciones.component';
import { EditarClasificacionComponent } from '../../../components/admin/modulos-extras/clasificaciones/editar-clasificacion/editar-clasificacion.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    AreasComponent,
    EditarAreaComponent,
    AutoresComponent,
    EditarAutorComponent,
    TiposdelibroComponent,
    EditarTipoComponent,
    EditorialesComponent,
    ModificarEditorialComponent,
    ColeccionComponent,
    EditarColeccionComponent,
    MateriasComponent,
    EditarMateriasComponent,
    IdiomaComponent,
    EditarIdiomaComponent,
    FormatosComponent,
    EditarFormatoComponent,
    ClasificacionesComponent,
    EditarClasificacionComponent
  ],
  imports: [
    CommonModule,
    ExtrasModuleRouting,
    MaterialModule
  ]
})
export class ExtrasModule { }
