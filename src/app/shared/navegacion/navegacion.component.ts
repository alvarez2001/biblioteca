import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent{
  @Input() datosPaginacion:any;
  @Output() paginar:EventEmitter<string> =new EventEmitter<string>();
  constructor() {}

  paginacion(url){
    this.paginar.emit(url);
  }

}
