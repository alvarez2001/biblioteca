import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vista-modulo-libros',
  templateUrl: './vista-modulo-libros.component.html',
  styleUrls: ['./vista-modulo-libros.component.scss']
})
export class VistaModuloLibrosComponent implements OnInit {

  constructor() { }

  datoTitulo:string;

  ngOnInit(): void {
  }

}
