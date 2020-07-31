import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';

@Component({
  selector: 'app-reg-genero',
  templateUrl: './reg-genero.component.html',
  styleUrls: ['./reg-genero.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class RegGeneroComponent implements OnInit {
  guardando:boolean = false;

  formGenero:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegGeneroComponent>,
    private fb:FormBuilder,
    private libroSvc:LibrosService,
    private funciones:FuncionesCompartidas
  ) {
    this.formGenero = this.fb.group({
      genero:[null,Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrarLibro(){
    const data = this.formGenero.value;
    this.guardando = true
    this.libroSvc.registrarGenero(data).subscribe(res => {
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
