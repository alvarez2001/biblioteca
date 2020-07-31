import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CPanelComponent } from '@admin/c-panel/c-panel.component';
import { LoginComponent } from '@app/components/login/login.component';
import { BibliotecaComponent } from '@app/components/invitado/biblioteca/biblioteca.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'biblioteca',
    component:BibliotecaComponent,
    loadChildren: () => import('@app/modules/invitados/invitados.module').then( (m) => m.InvitadosModule),
  },
  {
    path:'c-panel',
    component:CPanelComponent,
    loadChildren: ()=>
    import('@app/modules/c-panel/c-panel.module').then( (m) => m.CPanelModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
