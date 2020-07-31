import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Editorial } from '@app/interfaces/editorial';

@Component({
  selector: 'app-reg-editorial',
  templateUrl: './reg-editorial.component.html',
  styleUrls: ['./reg-editorial.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class RegEditorialComponent implements OnInit {

  public formEditorial:FormGroup;
  guardando:boolean;

  constructor(
    public dialogRef: MatDialogRef<RegEditorialComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private libroSvc:LibrosService,
    private general:FuncionesCompartidas,
    private fb:FormBuilder
    ) {
      this.formEditorial = this.fb.group({
        nombre:['',Validators.required],
        abreviado:['']
      });
    }

  ngOnInit(): void {
  }


  registrarEditorial(){
    const data:Editorial = this.formEditorial.value;
    if(this.formEditorial.valid){
      this.guardando = true;
      this.libroSvc.registrarEditorial(data).subscribe(res => {
        this.guardando=false;
        FuncionesCompartidas.alertNormal(res,'success')
        this.dialogRef.close(true);
      },
      err => {
        this.guardando = false
        console.log(err);
      })
    }
  }


}
