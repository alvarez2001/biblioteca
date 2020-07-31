
import { Component, OnInit } from '@angular/core';
import { InformacionService } from '@app/services/compartidos/informacion.service';
import { InvitadosService } from '@app/modules/invitados/services/invitados.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-imagen-principal',
  templateUrl: './imagen-principal.component.html',
  styleUrls: ['./imagen-principal.component.scss'],
  providers:[InvitadosService]
})
export class ImagenPrincipalComponent implements OnInit {

  constructor(private comunicacionSvc:InformacionService,private invitadoSvc:InvitadosService, private fb:FormBuilder) {
    this.busquedaForm = this.fb.group({
      search_type: [''],
      search_value: ['']
    });
    this.opciones = [
      'titulo',
      'registro',
      'etiquetas',
      //'tipo'
    ];
  }
  busquedaForm: FormGroup;

  public ocultar:boolean

  public opciones:Array<any>;

  ngOnInit(): void {
    this.comunicacionSvc.enviarMensajeObservableBooleano.subscribe(res => {
      this.ocultar = res
    },err => {
      console.log(err);
    })
  }

  private enviarData(data):void{
    this.comunicacionSvc.enviarData(data)
  }


  busqueda():void{
    if(this.busquedaForm.controls.search_type.value && this.busquedaForm.controls.search_value){

      this.invitadoSvc.solicitarInformacion(this.busquedaForm.value).subscribe(res => {
        this.enviarData(res)
      },err => {
        console.log(err)
      });

    }
  }

}
