import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-coleccion',
  templateUrl: './reg-coleccion.component.html',
  styleUrls: ['./reg-coleccion.component.scss'],
  providers:[FuncionesCompartidas,LibrosService]
})
export class RegColeccionComponent implements OnInit {
  guardando:boolean = false;

  formGenero:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegColeccionComponent>,
    private fb:FormBuilder,
    private libroSvc:LibrosService,
    private funciones:FuncionesCompartidas
  ) {
    this.formGenero = this.fb.group({
      nombre:[null,Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrarColeccion(){
    const data = this.formGenero.value;
    this.guardando = true
    this.libroSvc.registrarColeccion(data).subscribe(res => {
      console.log(res);
      this.guardando = false

      FuncionesCompartidas.alertNormal(res,'success')
      this.dialogRef.close(true);
    },err =>{
      this.guardando = false
      console.log(err);
    })
  }
}
