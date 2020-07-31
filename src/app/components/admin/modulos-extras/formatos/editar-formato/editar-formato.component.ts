import { Component, OnInit, Inject } from '@angular/core';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-formato',
  templateUrl: './editar-formato.component.html',
  styleUrls: ['./editar-formato.component.scss'],
  providers:[ExtrasService,FuncionesCompartidas]
})
export class EditarFormatoComponent implements OnInit {


  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder,
    private extrasSvc:ExtrasService,
    @Inject(MAT_DIALOG_DATA) private data,
    private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<EditarFormatoComponent>
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      formato:[this.data.formato,Validators.required]
    });
  }

  actualizar(){
    this.guardando = true
    this.extrasSvc.actualizarFormato(this.data.id,this.formArea.value).subscribe(res=>{
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
