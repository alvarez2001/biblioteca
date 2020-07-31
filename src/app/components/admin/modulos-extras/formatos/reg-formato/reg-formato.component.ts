import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { Component, OnInit } from '@angular/core';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-formato',
  templateUrl: './reg-formato.component.html',
  styleUrls: ['./reg-formato.component.scss'],
  providers:[ExtrasService,FuncionesCompartidas]
})
export class RegFormatoComponent implements OnInit {



  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder, private extrasSvc:ExtrasService, private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<RegFormatoComponent>
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      formato:['',Validators.required]
    });
  }

  registrar(){
    this.guardando = true
    this.extrasSvc.registrarFormato(this.formArea.value).subscribe(res=>{
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
