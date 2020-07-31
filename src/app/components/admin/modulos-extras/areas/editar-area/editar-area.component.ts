import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';

@Component({
  selector: 'app-editar-area',
  templateUrl: './editar-area.component.html',
  styleUrls: ['./editar-area.component.scss'],
  providers:[FuncionesCompartidas,ExtrasService]
})
export class EditarAreaComponent implements OnInit {


  formArea:FormGroup;
  guardando:boolean;
  constructor(
    private formBuilder:FormBuilder, private extrasSvc:ExtrasService, private generales:FuncionesCompartidas,
    public dialogRef: MatDialogRef<EditarAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {
      //console.log(data)
    }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formArea = this.formBuilder.group({
      nombre:[this.data.nombre,Validators.required]
    });
  }

  actualizarArea(){
    this.guardando = true
    this.extrasSvc.actualizarArea(this.data.id,this.formArea.value).subscribe(res=>{
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
