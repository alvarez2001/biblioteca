import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Global } from '@app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-image',
  templateUrl: './change-image.component.html',
  styleUrls: ['./change-image.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class ChangeImageComponent {

  public url:string;

  constructor(
    private dialogRef: MatDialogRef<ChangeImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private libroSvc:LibrosService,
    private general:FuncionesCompartidas,) {
      this.url = Global.url;
    }

  enviarImagen(e){
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file0', file);
    formData.append('id',this.data.id);
    //formData.forEach((value,key)=>{console.log(key+' ->', value)})
    this.libroSvc.ImagenLibro(formData).subscribe(res => {
      this.data.imagen = res
      Swal.fire({
        title: 'Imagen Subida con exito',
        imageUrl: `${this.url}libro/${res}`,
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Imagen cambiada',
      }).then((result)=> {
        this.dialogRef.close();
      })




    }, err => {
      //FuncionesCompartidas.alertNormal('Ha ocurrido un error','error')
      console.log(err)
    })
  }

}
