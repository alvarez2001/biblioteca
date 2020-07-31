import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarMateriasComponent } from './editar-materias/editar-materias.component';
import { RegMateriaComponent } from '../../reg-libro/reg-materia/reg-materia.component';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss'],
  providers:[LibrosService, ExtrasService, FuncionesCompartidas,SharedServiceService]
})
export class MateriasComponent implements OnInit {



  public data:any;
  datosPaginacion:any;

  constructor(private libroSvc:LibrosService, private extrasSvc:ExtrasService,private sharedSvc:SharedServiceService, private general:FuncionesCompartidas,public dialog: MatDialog,private informacionSvc:InformacionService) { }



  ngOnInit(): void {
    this.informacionSvc.enviarTitulo('Materias')
    this.buscarMaterias();
  }

  private buscarMaterias(){
    this.extrasSvc.buscarMaterias().subscribe(res=>{
      this.datosPaginacion = res
      this.data = res.data
      console.log(res)
    },err => {
      console.log(err)
    });
  }


  eliminarMateria(id){
    this.general.confirmAlert('Desea eliminar esta materia?',null,'question','SI',true,'NO').then((res)=> {
      if(res.value){
        FuncionesCompartidas.alertNormal('Espere un momento','warning',null,false)
        this.subscribeEliminar(id)
      }
    })
  }

  editarMaterias(data){
    const dialogRef = this.dialog.open(EditarMateriasComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarMaterias();
    });
  }

  private subscribeEliminar(id){
    this.extrasSvc.deleteMateria(id).subscribe(res =>  {
      FuncionesCompartidas.alertNormal(res.mensaje,'success');
      console.log(res)
      this.buscarMaterias();
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


  regMateria():void{
    const dialogRef = this.dialog.open(RegMateriaComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarMaterias();
    });
  }


}
