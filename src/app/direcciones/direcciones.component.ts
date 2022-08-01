import { Component, OnInit } from '@angular/core';
import { DireccionesService } from '../services/direcciones.service';
import { Direcciones } from '../shared/model/Direcciones';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss']
})
export class DireccionesComponent implements OnInit {

  displayedColumns: String[] = ['id', 'direccion','id_Usuario']
  dataSource!: Direcciones[];

  constructor(private svcDirecciones: DireccionesService) { }

  ngOnInit(): void {
    this.cargarData()
  }

  cargarData(){
    this.svcDirecciones.getDirecciones().subscribe(value=>{
      const dataObject = Object.values(value);
      if (dataObject[0] == 200){
        this.dataSource = dataObject[2];
      }
    });
  }
}
