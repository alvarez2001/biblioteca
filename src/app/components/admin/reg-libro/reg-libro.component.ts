import { RegTipoLibroComponent } from './reg-tipo-libro/reg-tipo-libro.component';
import { RegAreaComponent } from '@admin/vista-modulo-libros/reg-area/reg-area.component';
import { DatosLibro } from '@app/interfaces/datos-libro.interface';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, Validator, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegAutorComponent } from './reg-autor/reg-autor.component';
import { RegEditorialComponent } from './reg-editorial/reg-editorial.component';
import { RegMateriaComponent } from './reg-materia/reg-materia.component';
import { LibrosService } from '@app/modules/c-panel/services/libros.service';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Autor } from '@app/interfaces/autor';
import { RegGeneroComponent } from './reg-genero/reg-genero.component';
import { RegValoracionComponent } from './reg-valoracion/reg-valoracion.component';
import { RegColeccionComponent } from './reg-coleccion/reg-coleccion.component';
import { RegIdiomaComponent } from '../modulos-extras/idioma/reg-idioma/reg-idioma.component';
import { RegFormatoComponent } from '../modulos-extras/formatos/reg-formato/reg-formato.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-reg-libro',
  templateUrl: './reg-libro.component.html',
  styleUrls: ['./reg-libro.component.scss'],
  providers:[LibrosService,FuncionesCompartidas]
})
export class RegLibroComponent implements OnInit, Validator {

  @Output() titulo = new EventEmitter();
  valorar:any;
  autores:any;
  public libroMaterias;
  public libroEditorial;
  public cargandoFormulario:boolean = false;
  colecciones:Array<any>;

  public tipoObra:Array<any>;
  public idiomas:Array<any>;
  public formatos:Array<any>;
  public tipoColaboracion:Array<any>;
  public tipoISBN:Array<any>;

  public generos:Array<any>;
  guardando:boolean;
  public precaucion:string = 'Campos que contengan " * " son obligatorios';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirtyFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup:FormGroup;
  sixFormGroup:FormGroup;
  sevenFormGroup:FormGroup;
  eightFormGroup:FormGroup;

  valoracion:any;


  constructor(
    private _formBuilder: FormBuilder, public dialog: MatDialog,
    private libroSvc:LibrosService,
    private generales:FuncionesCompartidas,
    private router:Router
    ) {

    this.formularios();
  }

  ngOnInit() {
    this.cargarData();
    this.cargaGeneral();
    this.cambiarTituloReactivo();
  }

  validate(control: AbstractControl): import("@angular/forms").ValidationErrors {
    return this.validarRegistro(control.value)
  }

  cambiarTituloReactivo(){
    this.titulo.emit("Registrar Libro");
  }

  cargarData(){
    this.tipoColaboracion = FuncionesCompartidas.tiposValoracion();
    //this.tipoISBN = FuncionesCompartidas.tiposIsbn();
  }

  guardar(stepper){
    const obj = {};
    const dataEight = {valoracion_id: this.eightFormGroup.value.valoracion_id}
    const obj_unidos:DatosLibro = Object.assign(obj,this.firstFormGroup.value,this.secondFormGroup.value,this.thirtyFormGroup.value,this.fourFormGroup.value,this.fiveFormGroup.value,this.sixFormGroup.value,this.sevenFormGroup.value, dataEight);

    console.log(obj)
    this.guardando = true;

/*
    for (const propName in obj) {
      if (obj['valoracion_id'] === null || obj['valoracion_id'] === undefined || obj['valoracion_id'] === '') {
        delete obj['valoracion_id'];
      }
    } */


    this.libroSvc.registrarLibro(obj).subscribe(res => {
      console.log(res);
      this.guardando = false;
      FuncionesCompartidas.alertNormal(res.mensaje, 'success')
      this.Autores.clear();
      this.Materias.clear();
      this.Editorial.clear();
      stepper.reset();
      this.router.navigate(['c-panel','libros','ver-libro'])
    },
    err => {
      //FuncionesCompartidas.alertNormal('Ocurrio un error inesperado','error')
      this.guardando = false;
      console.log(err);
    })

  }

  cargaGeneral(){
    this.cargarAutores();
    this.cargarMaterias();
    this.cargarEditoriales();
    this.buscarGeneros();
    this.buscarColecciones();
    this.buscarTipoObra()
    this.cargarFormatos();
    this.cargarIdiomas();
    this.cargarISBN();
  }

  private cargarISBN(){
    this.libroSvc.buscarISBN().subscribe(res => {
      this.tipoISBN = res;
      console.log('ISBNS ->', res)
      this.cargandoFormulario = true
    },err => {
      console.log(err)
      this.cargandoFormulario = false
    });
  }

  private cargarIdiomas(){
    this.libroSvc.buscarIdiomas().subscribe(res => {
      this.idiomas = res;
      console.log('idiomas ->', res)
      if(this.idiomas.length <= 0 ){
        this.idiomas
      }
      this.cargandoFormulario = true
    },err => {
      console.log(err)
      this.cargandoFormulario = false
    })
  }


  private cargarFormatos(){
    this.libroSvc.buscarFormatos().subscribe(res=>{
      this.formatos = res
      console.log('Formatos ->', res)
      //console.log(this.formatos)
      if(this.formatos.length <= 0){
        this.formatos
      }
      this.cargandoFormulario = true
    },err => {
      console.log(err)
      this.cargandoFormulario = false
    })
  }

  private buscarTipoObra(){
    this.libroSvc.buscarTipoLibro().subscribe(res => {
      this.tipoObra = res
      console.log('tipos obras ->', res)
      //console.log(this.tipoObra)
      if(this.tipoObra.length <= 0){
        this.tipoObra
      }
      this.cargandoFormulario = true
    },err => {
      console.log(err)
      this.cargandoFormulario = false
    })
  }

  private buscarColecciones(){
    this.libroSvc.buscarColeccion().subscribe(res => {
      this.colecciones = res
      console.log('Colecciones ->',res)
      if(this.colecciones.length <= 0){
        this.colecciones = [{
          nombre:'No hay colecciones'
        }]
      }
      this.cargandoFormulario = true
    },err => {
      this.cargandoFormulario = false
      console.log(err)
    })
  }

  private buscarGeneros(){
    this.libroSvc.buscarGeneros().subscribe(res => {
      this.generos = res
      console.log('generos ->',res)
      if(this.generos.length <= 0){
        this.generos = [
          {genero:'No hay generos registrados'}
        ]
      }
      this.cargandoFormulario = true
    },err => {
      this.cargandoFormulario = false;
      console.log(err)
    })
  }


  cargarAutores(){
    this.libroSvc.buscarAutores().subscribe(res => {
      this.autores = res;
      console.log('autores ->',res)
      if(this.autores.length <= 0){
        this.autores = [
          {apellido:'No hay autores'}
        ]
      }
      this.cargandoFormulario = true
    },err => {
      this.cargandoFormulario = false;
      console.log(err);
    });

  }

  cargarMaterias(){

    this.libroSvc.buscarMaterias().subscribe(res => {
      this.libroMaterias = res
      console.log('materias ->',res)
      if(this.libroMaterias.length <= 0){
        this.libroMaterias=[
          {nombre:'no hay materias'}
        ]
      }
      this.cargandoFormulario = true
    }, err => {
      this.cargandoFormulario = false;
      console.log(err)
    });
  }

  cargarEditoriales(){
    this.libroSvc.buscarEditorial().subscribe(res => {
      this.cargandoFormulario = true
      console.log('editoriales ->',res)
      this.libroEditorial = res
      if(this.libroEditorial.length <= 0){
        this.libroEditorial = [{nombre:'no hay editoriales'}]
      }
    }, err => {
      console.log(err);
      this.cargandoFormulario = false;
    });
  }


  /*MATERIAS*/
  public materiaID;

  get Materias(){
    return this.fourFormGroup.get('materias') as FormArray;
  }
  agregarMateria(materia){
  if(materia){
    const materiaFormgroup = this._formBuilder.group({
      materia_id:materia
    });
    this.Materias.push(materiaFormgroup);
    this.materiaID = null;
  }
  }
  removerMateria(index:number){
    this.Materias.removeAt(index);
  }



  /*EDITORIALES*/
  public editorialID;

  get Editorial(){
    return this.thirtyFormGroup.get('editoriales') as FormArray;
  }
  agregarEditorial(editorial){

   if(editorial){
    const autorFormGroup = this._formBuilder.group({
      editorial_id:editorial
    });
    this.Editorial.push(autorFormGroup);
    this.editorialID = null;
   }

  }
  removerEditorial(index:number){
    this.Editorial.removeAt(index);
  }




  /*AUTORES*/
  public autorID;
  public colaborador;
  get Autores(){
    return this.secondFormGroup.get('autores') as FormArray;
  }
  agregarAutor(autor,colaborac){

   if(autor && colaborac ){
    const autorFormGroup = this._formBuilder.group({
      autor_id:[autor],
      colaboracion:[colaborac]
    });
    this.Autores.push(autorFormGroup);

    this.autorID = null;
    this.colaborador=null;
   }

  }
  removerAutor(index:number){
    this.Autores.removeAt(index);
  }


  validarRegistro(control: AbstractControl) {
    console.log(control.value)
    const datos = {
      registro:control.value
    }
    return new Promise(resolve => {
      this.libroSvc.validarRegistro(datos).subscribe(res =>{
        resolve(null)
      },
      err=>{
        resolve({
          asyncInvalid: true
        });
      })
    });

    }



  formularios(){
    this.firstFormGroup = this._formBuilder.group({
      titulo:[null,Validators.required],
      subtitulo:[null],
      descripcion:[null],
      tipo_libro:[null,Validators.required],
      registro:new FormControl(null,[Validators.required], this.validarRegistro.bind(this)),
      etiquetas:[null],
      prestar:[null,Validators.required]
    },
    {
      updateOn:'blur'
    });
    this.secondFormGroup = this._formBuilder.group({
      autores:this._formBuilder.array([],[Validators.min(1), Validators.required])
    });
    this.thirtyFormGroup = this._formBuilder.group({
      editoriales:this._formBuilder.array([], [Validators.min(1), Validators.required])
    });
    this.fourFormGroup = this._formBuilder.group({
      materias:this._formBuilder.array([],[Validators.required, Validators.min(1)])
    });
    this.fiveFormGroup = this._formBuilder.group({
      idiomas:[null],
      formato:[null],
      coleccion_id:[null],
      numero_coleccion:[null],
      numero_edicion:[null],
      ciudad:[null],
      url:[null],
      numero_impresion:[null],
      fecha_impresion:[null],
      fecha_edicion:[null],
      tomo:[null],
      volumen:[null]
    });
    this.sixFormGroup = this._formBuilder.group({
      codigo:[null],
      clasificacion_id:[null,[Validators.required]]
    });
    this.sevenFormGroup = this._formBuilder.group({
      biblioteca:[null,[Validators.required]],
      estante:[null,[Validators.required]],
      numero:[null,[Validators.required]]
    });
    this.eightFormGroup = this._formBuilder.group({
      valoracion_id:[null],
      generoId:[null]
    })
  }


  regGenero(){

    const dialogRef = this.dialog.open(RegGeneroComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.buscarGeneros();
    });
  }

  regTipoLibro(){
    const dialogRef= this.dialog.open(RegTipoLibroComponent,{
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscarTipoObra();
    })
  }


  regColeccion(){
    const dialogRef= this.dialog.open(RegColeccionComponent,{
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscarColecciones();
    })
  }

  regValoracion(){
   const dialogRef = this.dialog.open(RegValoracionComponent,{
    width:'650px'
   });
   dialogRef.afterClosed().subscribe(result => {
    this.buscarValoracion();
   })
  }

  buscarValoracion(){
    const valoracion = {
      genero_id:this.eightFormGroup.value.generoId
    }
    if(valoracion.genero_id){
      this.libroSvc.buscarValoracion(valoracion).subscribe(res => {
        this.valoracion = res
        if(this.valoracion.length <= 0){
          this.valoracion = [{descripcion:'No hay valoraciones'}]
        }
      },err => {
        console.log(err)
      })
    }
  }

  regAutor(): void {
    const dialogRef = this.dialog.open(RegAutorComponent, {
      width: '650px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cargarAutores();
      }
    });
  }

  regEditorial(): void {
    const dialogRef = this.dialog.open(RegEditorialComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cargarEditoriales();
      }
    });
  }

  regArea():void{
    const dialogRef = this.dialog.open(RegAreaComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  regMateria(): void {
    const dialogRef = this.dialog.open(RegMateriaComponent, {
      width: '500px',
      data:{value:true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cargarMaterias();
      }
    });
  }

  regIdioma(){
    const dialogRef = this.dialog.open(RegIdiomaComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cargarIdiomas();
      }
    });
  }
  regFormato(){
    const dialogRef = this.dialog.open(RegFormatoComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.cargarFormatos();
      }
    });
  }

  prueba(e){
    console.log(e)
    console.log('form ->',this.fiveFormGroup.value)

  }

}
