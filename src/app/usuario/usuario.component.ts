import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../shared/model/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  displayedColumns: String[] = ['id', 'nombre','apellido','celular','email']
  dataSource!: Usuario[];

  constructor(private svcUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.cargarData()
  }

  cargarData(){
    this.svcUsuario.getUsuarios().subscribe(value=>{
      const dataObject = Object.values(value);
      if (dataObject[0] == 200){
        this.dataSource = dataObject[2];
      }
    });
  }
}
