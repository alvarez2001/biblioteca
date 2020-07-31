import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModificarEditorialComponent } from './modificar-editorial/modificar-editorial.component';
import { RegEditorialComponent } from '../../reg-libro/reg-editorial/reg-editorial.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.scss'],
  providers:[LibrosService, ExtrasService, FuncionesCompartidas,SharedServiceService]
})
export class EditorialesComponent implements OnInit {



  public data:any;
  datosPaginacion:any;

  constructor(private libroSvc:LibrosService, private extrasSvc:ExtrasService,private sharedSvc:SharedServiceService, private general:FuncionesCompartidas,public dialog: MatDialog,private informacionSvc:InformacionService) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Editoriales')
    this.buscarEditoriales();
  }

  private buscarEditoriales(){
    this.extrasSvc.buscarEditoriales().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminarEditorial(id){
    this.general.confirmAlert('Desea eliminar esta editorial?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editarEditorial(data){
    const dialogRef = this.dialog.open(ModificarEditorialComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarEditoriales();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteEditorial(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      console.log(res)
      this.buscarEditoriales();
    },err => {
      //FuncionesCompartidas.alertNormal('Error inesperado','error');
      console.log(err)
    })
  }

  paginacion(url){
    this.data = false;
    this.sharedSvc.paginacionLibroAdmin(url).subscribe(res => {
      //console.log(res)
      this.datosPaginacion = res
      this.data = res.data
    },err => {
      console.log(err)
    })
  }


  regEditorial():void{
    const dialogRef = this.dialog.open(RegEditorialComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarEditoriales();
    });
  }


}
