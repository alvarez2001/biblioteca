import { Component, OnInit } from '@angular/core';
import { InformacionService } from '@app/services/compartidos/informacion.service';

@Component({
  selector: 'app-navbar-invitado',
  templateUrl: './navbar-invitado.component.html',
  styleUrls: ['./navbar-invitado.component.scss']
})
export class NavbarInvitadoComponent implements OnInit {

  constructor(private comunicacionSvc:InformacionService) { }

  ocultar:boolean = false

  ngOnInit(): void {
  }

  enviarData(data){
    this.comunicacionSvc.enviarBoolean(data);
  }
}
