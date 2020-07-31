import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarColeccionComponent } from './editar-coleccion/editar-coleccion.component';
import { RegColeccionComponent } from '../../reg-libro/reg-coleccion/reg-coleccion.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss'],
  providers:[LibrosService, ExtrasService, FuncionesCompartidas,SharedServiceService]
})
export class ColeccionComponent implements OnInit {


  public data:any;
  datosPaginacion:any;

  constructor(private libroSvc:LibrosService, private extrasSvc:ExtrasService,private sharedSvc:SharedServiceService, private general:FuncionesCompartidas,public dialog: MatDialog,private informacionSvc:InformacionService) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Colección')
    this.buscarColecciones();
  }

  private buscarColecciones(){
    this.extrasSvc.buscarColeccion().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminarColeccion(id){
    this.general.confirmAlert('Desea eliminar esta Colección?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editarColeccion(data){
    const dialogRef = this.dialog.open(EditarColeccionComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarColecciones();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteColeccion(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      console.log(res)
      this.buscarColecciones();
    },err => {
//      FuncionesCompartidas.alertNormal('Error inesperado','error');
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


  regColeccion():void{
    const dialogRef = this.dialog.open(RegColeccionComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarColecciones();
    });
  }


}
