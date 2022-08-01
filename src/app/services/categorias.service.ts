import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../shared/model/ResponseDto';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private path = `${environment.urlServerShopping}/categorias/`

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.path}buscartodos`)
      .pipe(map(
        value=>{
          return value
        }
      ));
  }

  getCategoria(id:number){
    return this.http.get<ResponseDto>(`${this.path}buscarporid/${id}`)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }

  actualizarCategorias(categorias:any):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.path}guardar`, categorias)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }

  getCategProd(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.path}buscarcatprod`)
      .pipe(map(
        value=>{
          return value
        }
      ));
  }
}
