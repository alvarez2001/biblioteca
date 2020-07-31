import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-idioma',
  templateUrl: './reg-idioma.component.html',
  styleUrls: ['./reg-idioma.component.scss'],
  providers:[ExtrasService,FuncionesCompartidas]
})
export class RegIdiomaComponent implements OnInit {



  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder, private extrasSvc:ExtrasService, private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<RegIdiomaComponent>
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      idioma:['',Validators.required]
    });
  }

  registrarIdioma(){
    this.guardando = true
    this.extrasSvc.registrarIdioma(this.formArea.value).subscribe(res=>{
      this.guardando = false
      FuncionesCompartidas.alertNormal(res.mensaje,'success')
      this.dialogRef.close(true);
//      console.log(res)
    },err => {
     // FuncionesCompartidas.alertNormal('Ocurrio un error inesperado', 'error')
      this.guardando = false
      console.log(err)
    })
  }

}
