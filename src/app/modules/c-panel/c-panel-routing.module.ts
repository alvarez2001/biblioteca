import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '@admin/inicio/inicio.component';
import { VistaModuloLibrosComponent } from '@admin/vista-modulo-libros/vista-modulo-libros.component';
import { VistaModuloComponent } from '@app/components/admin/modulos-extras/vista-modulo.component';





const routes: Routes = [

    {path:'',component:InicioComponent},
    {path:'inicio', component:InicioComponent},
    {
      path:'libros', component:VistaModuloLibrosComponent,
      loadChildren: ()=> import('@app/modules/c-panel/libros/libros.module').then( (m) => m.LibrosModule),
    },
    {
      path:'modulos-extras',component:VistaModuloComponent,
      loadChildren: ()=> import('@app/modules/c-panel/extras/extras.module').then( (m)=> m.ExtrasModule)

    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPanelRoutingModule { }
