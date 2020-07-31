import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-area',
  templateUrl: './reg-area.component.html',
  styleUrls: ['./reg-area.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class RegAreaComponent implements OnInit {

  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder, private libroSvc:LibrosService, private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<RegAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {
      console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      nombre:['',Validators.required]
    });
  }

  registrarArea(){
    this.guardando = true;
    this.libroSvc.registrarArea(this.formArea.value).subscribe(res => {
      this.guardando = false
      //console.log(res);
      FuncionesCompartidas.alertNormal(res,'success');
      this.formArea.reset();
      this.dialogRef.close(true)
    },err => {
      console.log(err);
      //this.generales.confirmAlert('Ocurrio un error inesperado',null,'error','Regresar')
      this.guardando = false
    })
  }
}
