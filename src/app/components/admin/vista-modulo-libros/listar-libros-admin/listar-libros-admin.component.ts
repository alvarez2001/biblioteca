import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';

@Component({
  selector: 'app-listar-libros-admin',
  templateUrl: './listar-libros-admin.component.html',
  styleUrls: ['./listar-libros-admin.component.scss'],
  providers:[LibrosService, SharedServiceService]
})
export class ListarLibrosAdminComponent implements OnInit {

  public libros;
  public dataLibro;
  constructor(private libroSvc:LibrosService, private sharedSvc:SharedServiceService) { }

  ngOnInit(): void {
    this.buscarLibros();
  }


  private buscarLibros():void{

     this.libroSvc.buscarLibros().subscribe(res => {
      this.dataLibro = res
      this.libros = res.data
    }, err => {
      console.log(err);
    })
  }

  paginacion(url){
    this.libros = false;
    this.sharedSvc.paginacionLibroAdmin(url).subscribe(res => {
      //console.log(res)
      this.dataLibro = res;
      this.libros = res.data;
    },err => {
      console.log(err)
    })
  }
}
