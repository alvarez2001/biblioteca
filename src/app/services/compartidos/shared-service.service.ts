import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '@app/services/global';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class SharedServiceService {
  private url:string
  constructor(private http:HttpClient) {
    this.url = Global.url;
  }


  paginacionLibroAdmin(url):Observable<any>{
    return this.http.get(url);
  }

  mostrarAlertaError(err:any) {
    const datos = document.createElement('ul');
    datos.classList.add('listaErrores');

    if(err?.error instanceof Object){
      for (const prop in err.error) {

        const li = document.createElement('li');
        li.classList.add('listaErrores__item');
        const text = document.createTextNode(err.error[prop]);
        li.appendChild(text);
        datos.appendChild(li);
      }
    }else{
        const li = document.createElement('li');
        li.classList.add('listaErrores__item');
        let text:any;
        if(err.error){
           text = document.createTextNode(err.error);
        }else{
          text = document.createTextNode(err)
        }

        li.appendChild(text);
        datos.appendChild(li);
    }
    return this.mensajeAlerta(datos);
  }

  private mensajeAlerta(datos: DocumentAndElementEventHandlers) {
    return Swal.fire({
      title: 'Error',
      icon:'error',
      html: datos,
    });
  }
}
