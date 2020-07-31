import { FuncionesCompartidas } from './../../../../shared/funcionesCompartidas';
import { ExtrasService } from './../../../../modules/c-panel/services/extras.service';
import { SharedServiceService } from './../../../../services/compartidos/shared-service.service';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarFormatoComponent } from './editar-formato/editar-formato.component';
import { RegFormatoComponent } from './reg-formato/reg-formato.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.scss'],
  providers:[LibrosService,SharedServiceService,ExtrasService,FuncionesCompartidas]
})
export class FormatosComponent implements OnInit {


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
    this.informacionSvc.enviarTitulo('Formatos')
    this.buscar();
  }

  private buscar(){
  this.extrasSvc.buscarFormatos().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminar(id){
    this.general.confirmAlert('Desea eliminar este formato?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editar(data){
    const dialogRef = this.dialog.open(EditarFormatoComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteFormato(id).subscribe(res =>  {
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
    const dialogRef = this.dialog.open(RegFormatoComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }


}
