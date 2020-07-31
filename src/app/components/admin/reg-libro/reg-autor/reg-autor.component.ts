import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { autores } from '@app/interfaces/autor';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reg-autor',
  templateUrl: './reg-autor.component.html',
  styleUrls: ['./reg-autor.component.scss'],
  providers:[LibrosService, FuncionesCompartidas]
})
export class RegAutorComponent implements OnInit {

  formAutor:FormGroup;
  guardando:boolean;

  constructor(
    public dialogRef: MatDialogRef<RegAutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private libroSvc:LibrosService,
    private general:FuncionesCompartidas,
    private fb:FormBuilder
    ) {
      this.formAutor = this.fb.group({
        autores:this.fb.array([])
      })
      this.agregarAutor()
    }

  ngOnInit(): void {

    console.log(this.formAutor.value);

  }

  agregarAutor(){
    const autorFormGroup = this.fb.group({
      nombre: new FormControl(''),
      apellido: new FormControl('', Validators.required),
      anterior: new FormControl(''),
      posterior: new FormControl('')
    });
    this.autores.push(autorFormGroup);
  }

  get autores(){
    return this.formAutor.get('autores') as FormArray;
  }

  registrarAutor(){
    console.log(this.formAutor.value);
    const autores:autores = this.formAutor.value
    this.guardando = true;
    this.libroSvc.registrarAutores(autores).subscribe(res => {
      this.guardando = false;
      this.formAutor.reset();
      FuncionesCompartidas.alertNormal(res.mensaje, 'success')
      this.dialogRef.close(true);
    },
    err => {
      this.guardando = false
      console.log(err)
    })
  }

}
