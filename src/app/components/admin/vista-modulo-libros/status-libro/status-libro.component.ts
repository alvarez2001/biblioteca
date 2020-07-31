import { Component, OnInit } from '@angular/core';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { ExtrasService } from '@app/modules/c-panel/services/extras.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { ChangeImageComponent } from './change-image/change-image.component';

@Component({
  selector: 'app-status-libro',
  templateUrl: './status-libro.component.html',
  styleUrls: ['./status-libro.component.scss'],
  providers:[LibrosService, ExtrasService, FuncionesCompartidas,SharedServiceService]
})
export class StatusLibroComponent implements OnInit {

  public data:any;
  datosPaginacion:any;

  //0 creado / 1 publicado / 2 dañado / 3 perdido

  constructor(private libroSvc:LibrosService, private extrasSvc:ExtrasService,private sharedSvc:SharedServiceService, private general:FuncionesCompartidas, private dialogRef:MatDialog) { }

  ngOnInit(): void {
    this.buscarLibros();
  }


  private buscarLibros():void{
    this.libroSvc.buscarLibrosTodos().subscribe(res => {
      this.data = res.data;
      this.datosPaginacion = res;
      console.log(res);
    },err => {
      console.log(err)
    })
  }

  status(data){
    const dialogRef = this.dialogRef.open(ChangeStatusComponent, {
      width: '650px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarLibros();
    });
  }

  imagenCambio(data){
    const dialogRef = this.dialogRef.open(ChangeImageComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarLibros();
    });
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
}
