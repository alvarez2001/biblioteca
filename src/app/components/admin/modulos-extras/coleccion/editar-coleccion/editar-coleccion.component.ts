import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';

@Component({
  selector: 'app-editar-coleccion',
  templateUrl: './editar-coleccion.component.html',
  styleUrls: ['./editar-coleccion.component.scss'],
  providers:[FuncionesCompartidas,ExtrasService]
})
export class EditarColeccionComponent {

  guardando:boolean = false;

  formGenero:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditarColeccionComponent>,
    private fb:FormBuilder,
    private extrasSvc:ExtrasService,
    private funciones:FuncionesCompartidas,
    @Inject(MAT_DIALOG_DATA) private data,
  ) {
    this.formGenero = this.fb.group({
      nombre:[this.data.nombre,Validators.required]
    });
  }


  actualizarColeccion(){
    const data = this.formGenero.value;
    this.guardando = true
    this.extrasSvc.actualizarColeccion(this.data.id,data).subscribe(res => {
      console.log(res);
      this.guardando = false
      FuncionesCompartidas.alertNormal(res.mensaje,'success')
      this.dialogRef.close(true);
    },err =>{
      this.guardando = false
      console.log(err);
    })
  }

}
