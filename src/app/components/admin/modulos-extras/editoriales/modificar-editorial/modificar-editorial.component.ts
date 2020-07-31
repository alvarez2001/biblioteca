import { Component, OnInit, Inject } from '@angular/core';
import { Editorial } from '@app/interfaces/editorial';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';

@Component({
  selector: 'app-modificar-editorial',
  templateUrl: './modificar-editorial.component.html',
  styleUrls: ['./modificar-editorial.component.scss'],
  providers:[FuncionesCompartidas,ExtrasService]
})
export class ModificarEditorialComponent{

  public formEditorial:FormGroup;
  guardando:boolean;

  constructor(
    public dialogRef: MatDialogRef<ModificarEditorialComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private general:FuncionesCompartidas,
    private fb:FormBuilder,
    private extrasSvc:ExtrasService
    ) {
      this.formEditorial = this.fb.group({
        nombre:[this.data.nombre,Validators.required],
        abreviado:[this.data.abreviado]
      });
    }


  actualizarEditorial(){
    const data:Editorial = this.formEditorial.value;
    if(this.formEditorial.valid){
      this.guardando = true;
      this.extrasSvc.actualizarEditorial(this.data.id,data).subscribe(res => {
        this.guardando=false;
        FuncionesCompartidas.alertNormal(res.mensaje,'success')
        this.dialogRef.close(true);
      },
      err => {
        //FuncionesCompartidas.alertNormal('Ha ocurrido un error','error')
        this.guardando = false
        console.log(err);
      })
    }
  }

}
