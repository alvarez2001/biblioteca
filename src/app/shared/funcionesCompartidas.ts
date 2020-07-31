import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable()
export class FuncionesCompartidas{
    static procesarData(data){
        const json = JSON.stringify(data);
        return 'json='+json;
    }

    static alertNormal(title,icon,timer = 5000, progress = true){
      return Swal.fire({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timerProgressBar: progress,
        timer: timer
      })
    }

    public confirmAlert(titulo,texto,icono,confirmButtonText, showCancel=false, cancelButton="Cancelar"){
        return Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            showCancelButton: showCancel,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText,
            cancelButtonText:cancelButton
          })
    }

    static tiposObras(){
      return [
        {value:'manuales'},
        {value:'tratado'},
        {value:'ley'},
        {value:'magisterio'},
        {value:'ensayo'},
        {value:'ficción'},
        {value:'libro de referencia'},
        {value:'atlas'},
        {value:'monografía'},
        {value:'divulgación'},
        {value:'homilía'},
        {value:'catecismo'},
        {value:'biblia'},

      ].sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });;
    }

    static tiposFormatos(){
      return [
        {value:'digital'},
        {value:'fisico'},
        {value:'fotocopia'},
      ].sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }

    static tiposIdiomas(){
      return [
        'inglés',
        'español',
        'hebreos',
        'griego',
        'portugués',
        'wayu',
        'francés',
        'italiano',
        'latín'
      ].sort();
    }

    static tiposValoracion(){
      return [
        'autor',
        'colaborador',
        'editor',
        'coordinador'
      ].sort();
    }

    static tiposIsbn(){
      return [
        'isbn',
        'no posee'
      ].sort();
    }
}
