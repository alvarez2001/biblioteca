import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';

@Component({
  selector: 'app-editar-clasificacion',
  templateUrl: './editar-clasificacion.component.html',
  styleUrls: ['./editar-clasificacion.component.scss'],
  providers:[ExtrasService]
})
export class EditarClasificacionComponent implements OnInit {



  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder,
    private extrasSvc:ExtrasService,
    @Inject(MAT_DIALOG_DATA) private data,
    public dialogRef: MatDialogRef<EditarClasificacionComponent>
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      clasificacion:[this.data.clasificacion,Validators.required]
    });
  }

  actualizar(){
    this.guardando = true
    this.extrasSvc.actualizarClasificacion(this.data.id,this.formArea.value).subscribe(res=>{
      this.guardando = false
      FuncionesCompartidas.alertNormal(res.mensaje,'success')
      this.dialogRef.close(true);
//      console.log(res)
    },err => {
      //FuncionesCompartidas.alertNormal('Ocurrio un error inesperado', 'error')
      this.guardando = false
      console.log(err)
    })
  }

}
