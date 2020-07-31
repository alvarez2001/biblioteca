import { EditarAreaComponent } from './editar-area/editar-area.component';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { RegAreaComponent } from '../../vista-modulo-libros/reg-area/reg-area.component';
import { MatDialog } from '@angular/material/dialog';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
  providers:[LibrosService, ExtrasService, FuncionesCompartidas,SharedServiceService]
})
export class AreasComponent implements OnInit {
  public data:any;
  datosPaginacion:any;

  constructor(private libroSvc:LibrosService, private extrasSvc:ExtrasService,private sharedSvc:SharedServiceService, private general:FuncionesCompartidas,public dialog: MatDialog,private informacionSvc:InformacionService) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Áreas')
    this.buscarAreas();
  }

  private buscarAreas(){
    this.extrasSvc.buscarAreas().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      //console.log(this.data)
    },err => {
      console.log(err)
    });
  }


  eliminarArea(id){
    this.general.confirmAlert('Desea eliminar esta Área?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }
  editarArea(id,nombre){
    const dialogRef = this.dialog.open(EditarAreaComponent, {
      width: '500px',
      data:{
        id:id,
        nombre:nombre
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarAreas();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteArea(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      //console.log(res)
      this.buscarAreas();
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


  regArea():void{
    const dialogRef = this.dialog.open(RegAreaComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarAreas();
    });
  }


}
