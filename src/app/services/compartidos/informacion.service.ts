import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  mensajeBooleano:boolean;

  private enviarMensajeSubjectBooleano = new Subject<boolean>();
  enviarMensajeObservableBooleano = this.enviarMensajeSubjectBooleano.asObservable();

  enviarBoolean(mensaje ){
    this.mensajeBooleano = mensaje;
    this.enviarMensajeSubjectBooleano.next(mensaje);
  }

  private enviarDataSubject = new Subject<any>();
  enviarDataObservable = this.enviarDataSubject.asObservable();

  enviarData(data){
    this.enviarDataSubject.next(data);
  }

  private enviarTituloSubject = new Subject<any>();
  enviarTituloObservable = this.enviarTituloSubject.asObservable();

  enviarTitulo(data:string){
    this.enviarTituloSubject.next(data);
  }





}
