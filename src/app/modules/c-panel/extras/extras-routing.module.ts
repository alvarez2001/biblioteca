import { EditorialesComponent } from '@admin/modulos-extras/editoriales/editoriales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from '@admin/modulos-extras/usuarios/usuarios.component';
import { AutoresComponent } from '@admin/modulos-extras/autores/autores.component';
import { AreasComponent } from '@admin/modulos-extras/areas/areas.component';
import { TiposdelibroComponent } from '@app/components/admin/modulos-extras/tiposdelibro/tiposdelibro.component';
import { ColeccionComponent } from '@app/components/admin/modulos-extras/coleccion/coleccion.component';
import { MateriasComponent } from '@app/components/admin/modulos-extras/materias/materias.component';
import { IdiomaComponent } from '@app/components/admin/modulos-extras/idioma/idioma.component';
import { FormatosComponent } from '@app/components/admin/modulos-extras/formatos/formatos.component';
import { ClasificacionesComponent } from '@app/components/admin/modulos-extras/clasificaciones/clasificaciones.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'areas'},
  {path:'areas',component:AreasComponent},
  {path:'autores',component:AutoresComponent},
  {path:'tipo-de-libros',component:TiposdelibroComponent},
  {path:'editoriales',component:EditorialesComponent},
  {path:'coleccion',component:ColeccionComponent},
  {path:'materias',component:MateriasComponent},
  {path:'idioma',component:IdiomaComponent},
  {path:'formatos',component:FormatosComponent},
  {path:'clasificaciones',component:ClasificacionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrasModuleRouting { }
