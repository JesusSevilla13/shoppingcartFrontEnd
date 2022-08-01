import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../shared/model/ResponseDto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private path = `${environment.urlServerShopping}/productos/`

  constructor(private http: HttpClient) { }

  getProductos(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.path}buscartodos`)
      .pipe(map(
        value=>{
          return value
        }
      ));
  }

  getProducto(id:number){
    return this.http.get<ResponseDto>(`${this.path}buscarporid/${id}`)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }

  actualizarProductos(productos:any):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.path}guardar`, productos)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }
}
