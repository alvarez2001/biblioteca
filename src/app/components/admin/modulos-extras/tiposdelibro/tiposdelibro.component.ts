import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarTipoComponent } from './editar-tipo/editar-tipo.component';
import { RegTipoLibroComponent } from '../../reg-libro/reg-tipo-libro/reg-tipo-libro.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-tiposdelibro',
  templateUrl: './tiposdelibro.component.html',
  styleUrls: ['./tiposdelibro.component.scss'],
  providers:[LibrosService, ExtrasService, FuncionesCompartidas,SharedServiceService]
})
export class TiposdelibroComponent implements OnInit {


  public data:any;
  datosPaginacion:any;

  constructor(private libroSvc:LibrosService, private extrasSvc:ExtrasService,private sharedSvc:SharedServiceService, private general:FuncionesCompartidas,public dialog: MatDialog,private informacionSvc:InformacionService) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Tipos de Libro');
    this.buscarTiposdeLibro();
  }

  private buscarTiposdeLibro(){
    this.extrasSvc.buscarTiposdelibro().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminarTipo(id){
    this.general.confirmAlert('Desea eliminar este Tipo de libro?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editarTipos(data){
    const dialogRef = this.dialog.open(EditarTipoComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarTiposdeLibro();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteTipodelibro(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      console.log(res)
      this.buscarTiposdeLibro();
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


  regTipo():void{
    const dialogRef = this.dialog.open(RegTipoLibroComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarTiposdeLibro();
    });
  }


}
