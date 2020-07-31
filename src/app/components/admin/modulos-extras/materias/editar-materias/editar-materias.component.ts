import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { RegMateria } from '@app/interfaces/reg-materia';

@Component({
  selector: 'app-editar-materias',
  templateUrl: './editar-materias.component.html',
  styleUrls: ['./editar-materias.component.scss'],
  providers:[ExtrasService,FuncionesCompartidas,LibrosService]
})
export class EditarMateriasComponent implements OnInit {
  formPrimary:FormGroup;
  areas;
  guardando:boolean;

  constructor(
    public dialogRef: MatDialogRef<EditarMateriasComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private extrasSvc:ExtrasService,
    private libroSvc:LibrosService,
    private fb:FormBuilder,
    private funciones:FuncionesCompartidas
    ){
      this.formPrimary = this.fb.group({
        nombre:[this.data.nombre,Validators.required],
        area_id:[this.data.area_id,Validators.required]
      });
      console.log(this.data)
    }

  ngOnInit(): void {
    this.buscarAreas()
  }

  buscarAreas(){
    this.libroSvc.buscarAreas().subscribe(res => {
      this.areas = res;
      console.log(this.areas)
    })
  }

  actualizarMateria(){
    const data:RegMateria = this.formPrimary.value;
    if(this.formPrimary.valid){
      this.guardando = true;
      this.extrasSvc.actualizarMateria(this.data.id,data).subscribe(res => {
        //console.log(res);
        this.guardando=false;
        FuncionesCompartidas.alertNormal(res.mensaje,'success');
        this.dialogRef.close(true);
        this.formPrimary.reset();
      },
      err => {
        this.guardando = false;
        console.log(err)
      });
    }
  }
}
