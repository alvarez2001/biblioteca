import { Component, OnInit } from '@angular/core';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-clasificacion',
  templateUrl: './reg-clasificacion.component.html',
  styleUrls: ['./reg-clasificacion.component.scss'],
  providers:[ExtrasService,FuncionesCompartidas]
})
export class RegClasificacionComponent implements OnInit {

  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder, private extrasSvc:ExtrasService, private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<RegClasificacionComponent>
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      clasificacion:['',Validators.required]
    });
  }

  registrar(){
    this.guardando = true
    this.extrasSvc.registrarClasificacion(this.formArea.value).subscribe(res=>{
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
