import { Component, OnInit } from '@angular/core';
import { InformacionService } from '@app/services/compartidos/informacion.service';
import { InvitadosService } from '@app/modules/invitados/services/invitados.service';
import { Global } from '@app/services/global';
import { SharedServiceService } from '@app/services/compartidos/shared-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers:[InvitadosService,SharedServiceService]
})
export class InicioComponent implements OnInit {

  constructor(private comunicacionSvc:InformacionService, private invitadosSvc:InvitadosService, private sharedSvc:SharedServiceService) {
    this.url = Global.url
  }
  public url:string
  public ocultar:boolean = true;

  public infoData:any;
  public datas:Array<any>;

  ngOnInit(): void {
    this.buscarMensaje();
    this.busquedaDataBusqueda();
    this.librosPublicados();
  }

  private buscarMensaje():void{
    this.comunicacionSvc.enviarMensajeObservableBooleano.subscribe(res => {
      //this.ocultar = res
      console.log(res);
    },err => {
      console.log(err);
    });
  }

  private busquedaDataBusqueda():void{
    this.ocultar = true
    this.comunicacionSvc.enviarDataObservable.subscribe(res => {
      this.ocultar = false
      this.infoData = res
      this.datas = res.data;
      console.log(res)
    },err => {
      this.ocultar = false
      console.log(err)
    })
  }

  private librosPublicados():void{
    this.ocultar =true
    this.invitadosSvc.librosPublicados().subscribe(res => {
      this.ocultar = false
      this.datas = res.data;
      this.infoData = res
    },err => {
      this.ocultar = false
      console.log(err)
    })
  }


  paginacion(url){
    this.ocultar = true;
    this.sharedSvc.paginacionLibroAdmin(url).subscribe(res =>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }


}
