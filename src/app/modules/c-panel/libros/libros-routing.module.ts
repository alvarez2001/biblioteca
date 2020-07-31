import { RegLibroComponent } from '@admin/reg-libro/reg-libro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarLibrosAdminComponent } from '@admin/vista-modulo-libros/listar-libros-admin/listar-libros-admin.component';
import { UnLibroComponent } from '@admin/vista-modulo-libros/un-libro/un-libro.component';
import { StatusLibroComponent } from '@app/components/admin/vista-modulo-libros/status-libro/status-libro.component';


const routes: Routes = [
  {path:'status/libro', component:StatusLibroComponent},
  {path:'ver-libro',component:ListarLibrosAdminComponent},
  {path:'ver-libro/:id',component:UnLibroComponent},
  {path:'registrar-libro',component:RegLibroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
