import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-valoracion',
  templateUrl: './reg-valoracion.component.html',
  styleUrls: ['./reg-valoracion.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class RegValoracionComponent implements OnInit {

  guardando:boolean = false;

  generos:Array<any>;
  formGenero:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegValoracionComponent>,
    private fb:FormBuilder,
    private libroSvc:LibrosService,
    private funciones:FuncionesCompartidas
  ) {
    this.formGenero = this.fb.group({
      descripcion:[null,Validators.required],
      puntaje:[null,Validators.required],
      genero_id:[null,Validators.required]
    });
  }

  ngOnInit(): void {
    this.buscarGeneros();
  }

  registrarValoracion(){
    if(this.formGenero.valid){
      this.regisValora(this.formGenero.value)
    }
  }

  private regisValora(data):any{
    this.guardando = true;
    this.libroSvc.registrarValoracion(data).subscribe(res => {
      this.guardando=false
      FuncionesCompartidas.alertNormal(res,'success')
      this.dialogRef.close(true);
    },err => {
      this.guardando=false
      console.log(err);
    })
  }

  private buscarGeneros(){
    this.libroSvc.buscarGeneros().subscribe(res => {
      //console.log(res)
      this.generos = res;
    },
    err => {
      console.log(err)
    })
  }
}
