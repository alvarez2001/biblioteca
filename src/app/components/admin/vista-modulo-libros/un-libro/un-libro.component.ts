
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { Global } from '@app/services/global';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';

@Component({
  selector: 'app-un-libro',
  templateUrl: './un-libro.component.html',
  styleUrls: ['./un-libro.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class UnLibroComponent implements OnInit {

  public errorSubida:string;
  public mensaje:string;
  public url:string;
  private parametro:number;
  public data;
  public tituloLibro:string = 'Cargando datos...';
  public tipoObra;
  public enviandoDatos:boolean;

  public idiomaData:Array<any> = [];
  public idiomas:Array<any>;

  public modificacionLibro:FormGroup;
  constructor(private route:Router,private Aroute:ActivatedRoute,
    private libroSvc:LibrosService,
    private generales:FuncionesCompartidas
    ) {
      this.url = Global.url;
      this.parametro = +this.Aroute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.buscarTipoObra();
    this.buscarLibro(this.parametro);
    this.buscarGeneros();
    this.buscarIdiomas();

  }

  private buscarIdiomas(){
    this.libroSvc.buscarIdiomas().subscribe(res => {
      this.idiomas = res
      console.log('idiomas ->',res)
    },err => {
      console.log(err)
    })
  }


  private buscarLibro(id):void{
    this.libroSvc.buscarUnLibro(id).subscribe(res =>{
      console.log(res)
      this.data = res;
      this.tituloLibro = this.data.titulo

      this.data.idiomas.forEach(idioma => {
        this.idiomaData.push(idioma.idioma_id)
      });
      //console.log(this.idiomaData)



    },err =>{
      console.log(err)
    })
  }

  habilitarCampo(e){
    e.target.readOnly = false;
  }
  deshabilitarCampo(e){
    e.target.readOnly = true;
  }


 private buscarTipoObra(){
    this.libroSvc.buscarTipoLibro().subscribe(res => {
      this.tipoObra = res
      console.log('tipos de obra ->',this.tipoObra)
    },err => {
      console.log(err)
    })
  }

  modificarCampos():void{
    const data = {
      id: this.data.id,
      titulo: this.data.titulo,
      subtitulo:this.data.subtitulo,
      etiquetas:this.data.etiquetas,
      descripcion:this.data.descripcion[0].descripcion,
      valoracion:this.valoracionEscogida
      //tipo:this.data.tipo
    }
    this.enviandoDatos = true;
    this.libroSvc.modificarLibro(data,this.data.id).subscribe(res => {
      this.enviandoDatos = false
      console.log(res)
      FuncionesCompartidas.alertNormal(res,'success');
    },err => {
      this.enviandoDatos = false
      console.log(err)
      //FuncionesCompartidas.alertNormal('Ha ocurrido un error','error');
    })
  }

  valorar:any;
  public generos:Array<any>;
  valoracion:any;
  valoracionEscogida:any;

  private buscarGeneros(){
    this.libroSvc.buscarGeneros().subscribe(res => {
      this.generos = res
      console.log('generos ->',res)
      if(this.generos.length <= 0){
        this.generos = [
          {genero:'No hay generos registrados'}
        ]
      }
    },err => {
      console.log(err)
    })
  }


  buscarValoracion(){
    const valoracion = {
      genero_id:this.valorar
    }
    if(valoracion.genero_id){
      this.libroSvc.buscarValoracion(valoracion).subscribe(res => {
        this.valoracion = res
        console.log(this.valoracion);
        if(this.valoracion.length <= 0){
          this.valoracion = [{descripcion:'No hay valoraciones'}]
        }
      },err => {
        console.log(err)
      })
    }
  }

  publicarLibro():void{
    this.enviandoDatos = true;
    const data = {
      id : this.data.id
    }
    this.libroSvc.publicarLibro(data).subscribe(res => {
      console.log(res);
      this.generales.confirmAlert(res,null,'success','Regresar').then( (result) => {
        this.route.navigate(['c-panel','libros','ver-libro'])
      })
      this.enviandoDatos = false;
    }, err => {
      this.enviandoDatos = false;
      console.log(err);
    })
  }

  enviarImagen(e){
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file0', file);
    formData.append('id',this.data.id);
    //formData.forEach((value,key)=>{console.log(key+' ->', value)})
    this.libroSvc.ImagenLibro(formData).subscribe(res => {
      this.data.imagen = res
      this.mensaje = 'Imagen subida con exito';
      this.errorSubida = 'success';
    }, err => {
      this.errorSubida = 'failed';
      this.mensaje = 'Error al subir imagen';
      console.log(err)
    })
  }




}
