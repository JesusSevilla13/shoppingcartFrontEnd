import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../shared/model/ResponseDto';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  
  private path = `${environment.urlServerShopping}/direcciones/`

  constructor(private http: HttpClient) { }

  getDirecciones(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.path}buscartodos`)
      .pipe(map(
        value=>{
          return value
        }
      ));
  }

  getDireccion(id:number){
    return this.http.get<ResponseDto>(`${this.path}buscarporid/${id}`)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }

  actualizarDirecciones(direcciones:any):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.path}guardar`, direcciones)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }
}
