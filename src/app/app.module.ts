import { NavbarInvitadoComponent } from '@app/components/invitado/navbar-invitado/navbar-invitado.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

import { MaterialModule } from '@app/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptarService } from '@app/services/interceptor/interceptar.service';
import { LoginComponent } from './components/login/login.component';
import { BibliotecaComponent } from '@app/components/invitado/biblioteca/biblioteca.component';
import { ImagenPrincipalComponent } from './components/invitado/imagen-principal/imagen-principal.component';
import { SharedServiceService } from './services/compartidos/shared-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BibliotecaComponent,
    NavbarInvitadoComponent,
    ImagenPrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    SharedServiceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptarService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
