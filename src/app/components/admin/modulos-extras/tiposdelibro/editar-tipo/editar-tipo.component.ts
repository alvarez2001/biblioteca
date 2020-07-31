import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';

@Component({
  selector: 'app-editar-tipo',
  templateUrl: './editar-tipo.component.html',
  styleUrls: ['./editar-tipo.component.scss'],
  providers:[FuncionesCompartidas,ExtrasService]
})
export class EditarTipoComponent {
  guardando:boolean = false;

  formGenero:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditarTipoComponent>,
    private fb:FormBuilder,
    private funciones:FuncionesCompartidas,
    private extrasSvc:ExtrasService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    this.formGenero = this.fb.group({
      nombre:[this.data.nombre,Validators.required]
    });
  }

  actualizarTipo():void{
    this.guardando = true;
    this.extrasSvc.actualizarTiposdelibro(this.data.id, this.formGenero.value).subscribe(res => {
      console.log(res)
      FuncionesCompartidas.alertNormal(res.mensaje,'success')
      this.dialogRef.close(true)
      this.guardando = false
    },err => {
      this.guardando = false
      console.log(err)
    })
  }




}
