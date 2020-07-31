export interface DatosLibro {

  etiquetas:string;
  registro:string;
  titulo:string;

  autores:Array<AutorLibro>;
  editoriales:Array<EditorialLibro>;
  materias:Array<MateriaLibro>;

  codigo:string;
  tipo:string;

  biblioteca:string;
  estante:string;
  numero:string;

  ciudad:string;
  coleccion: string;
  fecha_edicion: Date;
  fecha_impresion: Date;
  formato: string;
  idioma: string;
  numero_coleccion: string;
  numero_edicion: string;
  numero_impresion: string;
  tomo: string;
  url: string;
  volumen: string;
  valoracion_id ?:number;

}

export interface MateriaLibro{
  materia_id:number;
}

export interface EditorialLibro{
  editorial_id:number;
}

export interface AutorLibro{
  autor_id:number;
  colaboracion:string;
}
