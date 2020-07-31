import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.scss'],
  providers:[ExtrasService,FuncionesCompartidas]
})
export class EditarIdiomaComponent implements OnInit {



  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder,
    private extrasSvc:ExtrasService,
    @Inject(MAT_DIALOG_DATA) private data,
    private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<EditarIdiomaComponent>
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      idioma:[this.data.idioma,Validators.required]
    });
  }

  actualizarIdioma(){
    this.guardando = true
    this.extrasSvc.actualizarIdioma(this.data.id,this.formArea.value).subscribe(res=>{
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
