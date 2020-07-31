import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { RegMateria } from '@app/interfaces/reg-materia';


@Component({
  selector: 'app-reg-materia',
  templateUrl: './reg-materia.component.html',
  styleUrls: ['./reg-materia.component.scss'],
  providers:[LibrosService, FuncionesCompartidas]
})
export class RegMateriaComponent implements OnInit {

  formPrimary:FormGroup;
  areas;
  guardando:boolean;

  constructor(
    public dialogRef: MatDialogRef<RegMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private libroSvc:LibrosService,
    private fb:FormBuilder,
    private funciones:FuncionesCompartidas
    ){
      this.formPrimary = this.fb.group({
        nombre:['',Validators.required],
        area_id:[null,Validators.required]
      });
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

  registrarMateria(){
    const data:RegMateria = this.formPrimary.value;
    if(this.formPrimary.valid){
      this.guardando = true;
      this.libroSvc.registrarMateria(data).subscribe(res => {
        console.log(res);
        this.guardando=false;
        FuncionesCompartidas.alertNormal(res.mensaje,'success')
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
