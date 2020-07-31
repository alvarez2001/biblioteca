import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { SharedServiceService } from '../compartidos/shared-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptarService implements HttpInterceptor{

  constructor(private sharedSvc:SharedServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url.search('libro/imagen') === -1){
      const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      const reqClone = req.clone({
        headers
      });
      //console.log(reqClone.headers.get('content-type'));
      return next.handle(reqClone).pipe(
        catchError((err) => this.manejarErrores(err))
      );
    }

    else{
      return next.handle(req).pipe(
        catchError((err) => this.manejarErrores(err))
      );
    }





  }



  private manejarErrores(err: HttpErrorResponse) {
    if (err.status !== 500 && err.status !== 0 && err.status !== 401) {
      this.sharedSvc.mostrarAlertaError(err);
      /* console.log(err); */
      return throwError('error de validacion');
    } else if (err.status === 401) {

      Swal.fire({
        title:'Acceso Denegado',
        text:'Estas intentando acceder a un área no autorizada ó su sesión ha vencido',
        icon:'error'
      });
//      this.loginSvc.borrarDatos('Se ha cerrado sesión')
      return throwError(`no estas autentificado`);
    }
    else if (err.status === 0){
      Swal.fire({
        title:'Ha ocurrido un error fatal',
        text:'No se ha podido establecer conexión con el servidor, revise la conexión de internet.',
        icon:'error'
      });
    }
    else if(err.status === 500){
      Swal.fire({
        title:'Ha ocurrido un error inesperado',
        text:'Comuniquese con el soporte tecnico',
        icon:'error'
      })
    }
    return throwError(err);
  }


  manejarError(error:HttpErrorResponse){
  console.log(error)
  return throwError('error personalizado')
  }

}


