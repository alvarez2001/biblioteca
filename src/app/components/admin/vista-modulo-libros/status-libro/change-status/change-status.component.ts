import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class ChangeStatusComponent {
  form:FormGroup;
  guardando:boolean;
  status:Array<any>;
  constructor(
    private dialogRef: MatDialogRef<ChangeStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private libroSvc:LibrosService,
    private general:FuncionesCompartidas,
    private formBuilder:FormBuilder) {
      this.validacionFormulario();
      this.status = [
        {id:1, nombre:'Publicado'},
        {id:2, nombre:'Dañado'},
        {id:3, nombre:'Perdido'}
      ]
    }



  validacionFormulario():void{
    this.form = this.formBuilder.group({
      status:[this.data.status,Validators.required],
      id:[this.data.id]
    });
  }

  actualizar(){
    this.guardando = true;
    //console.log('Data form ->',this.form.value)
    this.libroSvc.actualizarStatus(this.form.value).subscribe(res => {
      this.guardando = false
      console.log(res)
      //FuncionesCompartidas.alertNormal(res,'success');
      //this.form.reset();
      this.dialogRef.close(true)
    },err => {
      console.log(err);
      //FuncionesCompartidas.alertNormal('Ha ocurrido un error','error')
      this.guardando = false
    })
  }
}
