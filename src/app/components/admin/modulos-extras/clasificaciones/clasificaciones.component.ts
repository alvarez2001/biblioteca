import { EditarClasificacionComponent } from './editar-clasificacion/editar-clasificacion.component';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { MatDialog } from '@angular/material/dialog';
import { RegClasificacionComponent } from './reg-clasificacion/reg-clasificacion.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.scss'],
  providers:[LibrosService,ExtrasService,SharedServiceService,FuncionesCompartidas]
})
export class ClasificacionesComponent implements OnInit {



  public data:any;
  datosPaginacion:any;

  constructor(
    private extrasSvc:ExtrasService,
    private sharedSvc:SharedServiceService,
    private general:FuncionesCompartidas,
    private dialog: MatDialog,
    private informacionSvc:InformacionService
    ) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Clasificaciones')
    this.buscar();
  }

  private buscar(){
  this.extrasSvc.buscarClasificaciones().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminar(id){
    this.general.confirmAlert('Desea eliminar esta Clasificación?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editar(data){
    const dialogRef = this.dialog.open(EditarClasificacionComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteClasificacion(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      console.log(res)
      this.buscar();
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


  reg():void{
    const dialogRef = this.dialog.open(RegClasificacionComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }


}
