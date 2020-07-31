import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialog } from '@angular/material/dialog';
import { EditarIdiomaComponent } from './editar-idioma/editar-idioma.component';
import { RegIdiomaComponent } from './reg-idioma/reg-idioma.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss'],
  providers:[SharedServiceService,ExtrasService,LibrosService,FuncionesCompartidas]
})
export class IdiomaComponent implements OnInit {


  public data:any;
  datosPaginacion:any;

  constructor(
    private libroSvc:LibrosService,
    private extrasSvc:ExtrasService,
    private sharedSvc:SharedServiceService,
    private general:FuncionesCompartidas,
    private dialog: MatDialog,
    private informacionSvc:InformacionService
    ) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Idiomas')
    this.buscarIdioma();
  }

  private buscarIdioma(){
  this.extrasSvc.buscarIdiomas().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminarIdioma(id){
    this.general.confirmAlert('Desea eliminar este Idioma?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editarIdioma(data){
    const dialogRef = this.dialog.open(EditarIdiomaComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarIdioma();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteIdioma(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      console.log(res)
      this.buscarIdioma();
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


  regIdioma():void{
    const dialogRef = this.dialog.open(RegIdiomaComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarIdioma();
    });
  }



}
