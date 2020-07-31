import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-vista-modulo',
  templateUrl: './vista-modulo.component.html',
  styleUrls: ['./vista-modulo.component.scss']
})
export class VistaModuloComponent implements AfterViewInit {

  titulo:string = 'Modulos extras';

  constructor(
    private informacionSvc:InformacionService,
    private cdr:ChangeDetectorRef
  ) {

   }

  ngAfterViewInit(): void {
    this.cambiarTitulo();
  }

  private cambiarTitulo(){
    this.informacionSvc.enviarTituloObservable.subscribe(res => {

      this.titulo = res
      this.cdr.detectChanges()
    })
  }



}
