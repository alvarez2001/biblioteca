import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Global } from '@app/services/global';
import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Observable } from 'rxjs';
import { Autor } from '@app/interfaces/autor';
import { map } from 'rxjs/operators';

@Injectable()
export class LibrosService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url = Global.url;
  }


  registrarMateria(data):Observable<any>{
    return this.http.post(`${this.url}materias`,FuncionesCompartidas.procesarData(data))
  }



  registrarArea(data):Observable<any>{
    return this.http.post(`${this.url}areas`,FuncionesCompartidas.procesarData(data))
  }

  registrarAutores(data):Observable<any>{
    return this.http.post(`${this.url}autores`,FuncionesCompartidas.procesarData(data))
  }

  registrarEditorial(data):Observable<any>{
    return this.http.post(`${this.url}editoriales`,FuncionesCompartidas.procesarData(data))
  }


  buscarLibros():Observable<any>{
    return  this.http.get(`${this.url}libros`)
  }
  registrarLibro(data):Observable<any>{
    return this.http.post(`${this.url}libros`,FuncionesCompartidas.procesarData(data))
  }

  buscarUnLibro(id):Observable<any>{
    return this.http.get(`${this.url}libros/${id}`);
  }

  modificarLibro(data, id):Observable<any>{
    return this.http.put(`${this.url}libros/${id}`, FuncionesCompartidas.procesarData(data));
  }

  publicarLibro(data):Observable<any>{
    return this.http.put(`${this.url}libro/publicacion`, FuncionesCompartidas.procesarData(data))
  }

  validarRegistro(data):Observable<any>{
    return this.http.post(`${this.url}libro/verificacionregistro`,FuncionesCompartidas.procesarData(data))
  }

  registrarGenero(data):Observable<any>{
    return this.http.post(`${this.url}generos`, FuncionesCompartidas.procesarData(data))
  }


  registrarValoracion(data):Observable<any>{
    return this.http.post(`${this.url}valoraciones`,FuncionesCompartidas.procesarData(data))
  }

  buscarValoracion(data):Observable<any>{
    return this.http.post(`${this.url}valoracion/genero`,FuncionesCompartidas.procesarData(data))
  }


  registrarColeccion(data):Observable<any>{
    return this.http.post(`${this.url}colecciones`, FuncionesCompartidas.procesarData(data))
  }


  registrarTipoLibro(data):Observable<any>{
    return this.http.post(`${this.url}tipos`, FuncionesCompartidas.procesarData(data))
  }


  ImagenLibro(data){
    const headers = new HttpHeaders().set("Content-Type", "multipart/form-data");
    //; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
    return this.http.post(`${this.url}libro/imagen`,data);
  }
  /*
  file0
  id:
  */


 buscarGenero():Observable<any>{
  return this.http.get(`${this.url}generos`)
}

  buscarGeneros():Observable<any>{
    return this.http.get(`${this.url}mostrar/generos`);
  }

  buscarISBN():Observable<any>{
    return this.http.get(`${this.url}mostrar/clasificaciones`)
  }

 buscarTipoLibro():Observable<any>{
    return this.http.get(`${this.url}mostrar/tipos`)
  }

  buscarIdiomas():Observable<any>{
    return this.http.get(`${this.url}mostrar/idiomas`)
  }
  buscarAutores():Observable<any>{
    return this.http.get(`${this.url}mostrar/autores`)
  }
  buscarEditorial():Observable<any>{
    return this.http.get(`${this.url}mostrar/editoriales`)
  }
  buscarMaterias():Observable<any>{
    return this.http.get(`${this.url}mostrar/materias`)
  }
  buscarColeccion():Observable<any>{
    return this.http.get(`${this.url}mostrar/colecciones`);
  }
  buscarAreas():Observable<any>{
    return this.http.get(`${this.url}mostrar/areas`)
  }
  buscarFormatos():Observable<any>{
    return this.http.get(`${this.url}mostrar/formatos`)
  }
  buscarIsbn():Observable<any>{
    return this.http.get(`${this.url}mostrar/isbn`)
  }


  buscarLibrosTodos():Observable<any>{
    return this.http.get(`${this.url}listar/libros`);
  }

  id
  status

  actualizarStatus(data):Observable<any>{
    return this.http.put(`${this.url}libro/cambiarstatus`,FuncionesCompartidas.procesarData(data));
  }

}
