import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-tipo-libro',
  templateUrl: './reg-tipo-libro.component.html',
  styleUrls: ['./reg-tipo-libro.component.scss'],
  providers:[FuncionesCompartidas,LibrosService]
})
export class RegTipoLibroComponent implements OnInit {
  guardando:boolean = false;

  formGenero:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<RegTipoLibroComponent>,
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

  registrarTipo(){
    const data = this.formGenero.value;
    this.guardando = true
    this.libroSvc.registrarTipoLibro(data).subscribe(res => {
      console.log(res);
      this.guardando = false
      FuncionesCompartidas.alertNormal(res,'success')
      this.dialogRef.close(true)
    },err =>{
      this.guardando = false
      console.log(err);
    })
  }

}
