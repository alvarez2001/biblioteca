import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '@app/services/global';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class InvitadosService {
  private url:string
  constructor(private http:HttpClient) {
    this.url = Global.url
  }

  solicitarInformacion(data):Observable<any>{
    return this.http.post(`${this.url}librosbusqueda`,FuncionesCompartidas.procesarData(data));
  }
  solicitarTipoBusqueda(data):Observable<any>{
    return this.http.post(`${this.url}librosbusqueda/tipo`, FuncionesCompartidas.procesarData(data))
  }

  librosPublicados():Observable<any>{
    return this.http.get(`${this.url}librospublicados`);
  }
}
