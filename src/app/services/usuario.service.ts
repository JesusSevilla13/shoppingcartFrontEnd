import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../shared/model/ResponseDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private path = `${environment.urlServerShopping}/usuario/`

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.path}buscartodos`)
      .pipe(map(
        value=>{
          return value
        }
      ));
  }

  getUsuario(id:number){
    return this.http.get<ResponseDto>(`${this.path}buscarporid/${id}`)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }

  actualizarUsuario(usuario:any):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.path}guardar`, usuario)
    .pipe(map(
      value=>{
        return value
      }
    ));
  }
}
