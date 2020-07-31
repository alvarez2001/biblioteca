import { FuncionesCompartidas } from '@app/shared/funcionesCompartidas';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '@app/services/global';

@Injectable()
export class ExtrasService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url = Global.url;
  }

  buscarAreas():Observable<any>{
    return this.http.get(`${this.url}areas`)
  }
  deleteArea(id):Observable<any> {
    return this.http.delete(`${this.url}areas/${id}`);
  }
  actualizarArea(id,data):Observable<any>{
    return this.http.put(`${this.url}areas/${id}`,FuncionesCompartidas.procesarData(data))
  }


  buscarAutores():Observable<any>{
    return this.http.get(`${this.url}autores`)
  }
  deleteAutor(id):Observable<any>{
    return this.http.delete(`${this.url}autores/${id}`)
  }
  actualizarAutor(id,data):Observable<any>{
    return this.http.put(`${this.url}autores/${id}`,FuncionesCompartidas.procesarData(data))
  }



  buscarTiposdelibro():Observable<any>{
    return this.http.get(`${this.url}tipos`)
  }
  deleteTipodelibro(id):Observable<any>{
    return this.http.delete(`${this.url}tipos/${id}`)
  }
  actualizarTiposdelibro(id,data):Observable<any>{
    return this.http.put(`${this.url}tipos/${id}`,FuncionesCompartidas.procesarData(data))
  }


  buscarEditoriales():Observable<any>{
    return this.http.get(`${this.url}editoriales`);
  }
  deleteEditorial(id):Observable<any>{
    return this.http.delete(`${this.url}editoriales/${id}`);
  }
  actualizarEditorial(id,data):Observable<any>{
    return this.http.put(`${this.url}editoriales/${id}`,FuncionesCompartidas.procesarData(data));
  }


  buscarColeccion():Observable<any>{
    return this.http.get(`${this.url}colecciones`);
  }
  deleteColeccion(id):Observable<any>{
    return this.http.delete(`${this.url}colecciones/${id}`);
  }
  actualizarColeccion(id,data):Observable<any>{
    return this.http.put(`${this.url}colecciones/${id}`, FuncionesCompartidas.procesarData(data));
  }


  buscarMaterias():Observable<any>{
    return this.http.get(`${this.url}materias`)
  }
  deleteMateria(id):Observable<any>{
    return this.http.delete(`${this.url}materias/${id}`)
  }
  actualizarMateria(id,data):Observable<any>{
    return this.http.put(`${this.url}materias/${id}`,FuncionesCompartidas.procesarData(data))
  }


  buscarIdiomas():Observable<any>{
    return this.http.get(`${this.url}idiomas`);
  }
  deleteIdioma(id):Observable<any>{
    return this.http.delete(`${this.url}idiomas/${id}`)
  }
  actualizarIdioma(id,data):Observable<any>{
    return this.http.put(`${this.url}idiomas/${id}`,FuncionesCompartidas.procesarData(data))
  }
  registrarIdioma(data):Observable<any>{
    return this.http.post(`${this.url}idiomas`,FuncionesCompartidas.procesarData(data))
  }



  buscarFormatos():Observable<any>{
    return this.http.get(`${this.url}formatos`)
  }
  deleteFormato(id):Observable<any>{
    return this.http.delete(`${this.url}formatos/${id}`)
  }
  actualizarFormato(id,data):Observable<any>{
    return this.http.put(`${this.url}formatos/${id}`,FuncionesCompartidas.procesarData(data))
  }
  registrarFormato(data):Observable<any>{
    return this.http.post(`${this.url}formatos`,FuncionesCompartidas.procesarData(data))
  }


  buscarClasificaciones():Observable<any>{
    return this.http.get(`${this.url}clasificaciones`)
  }
  deleteClasificacion(id):Observable<any>{
    return this.http.delete(`${this.url}clasificaciones/${id}`)
  }
  registrarClasificacion(data):Observable<any>{
    return this.http.post(`${this.url}clasificaciones`,FuncionesCompartidas.procesarData(data))
  }
  actualizarClasificacion(id,data):Observable<any>{
    return this.http.put(`${this.url}clasificaciones/${id}`,FuncionesCompartidas.procesarData(data))
  }

}
