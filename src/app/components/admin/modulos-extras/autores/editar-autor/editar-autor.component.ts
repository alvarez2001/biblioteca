import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { autores } from '@app/interfaces/autor';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.scss'],
  providers:[LibrosService,FuncionesCompartidas,ExtrasService]
})
export class EditarAutorComponent implements OnInit {


  formAutor:FormGroup;
  guardando:boolean;

  constructor(
    public dialogRef: MatDialogRef<EditarAutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private libroSvc:LibrosService,
    private general:FuncionesCompartidas,
    private fb:FormBuilder,
    private extrasSvc:ExtrasService
    ) {
      this.formAutor = this.fb.group({
        autores:this.fb.array([])
      })
      this.agregarAutor()
    }

  ngOnInit(): void {

    console.log(this.formAutor.value);

  }

  private agregarAutor(){
    const autorFormGroup = this.fb.group({
      nombre: new FormControl(this.data.nombre),
      apellido: new FormControl(this.data.apellido, Validators.required),
      anterior: new FormControl(this.data.anterior),
      posterior: new FormControl(this.data.posterior)
    });
    this.autores.push(autorFormGroup);
  }

  get autores(){
    return this.formAutor.get('autores') as FormArray;
  }

  actualizarAutor(){
    console.log(this.formAutor.value);
    const autores:autores = this.formAutor.value.autores[0]
    this.guardando = true;
    this.extrasSvc.actualizarAutor(this.data.id,autores).subscribe(res => {
      this.guardando = false;
      //console.log(res)
      FuncionesCompartidas.alertNormal(res.mensaje,'success')
      this.dialogRef.close(true);
    },
    err => {
      this.guardando = false
      console.log(err)
    })
  }
}
