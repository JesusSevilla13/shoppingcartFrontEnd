import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Categorias } from '../shared/model/Categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  displayedColumns: String[] = ['id', 'nombre']
  dataSource!: Categorias[];

  constructor( private svcCategorias: CategoriasService) {}

  ngOnInit(): void {
    this.cargarData()
  }

  cargarData(){
    this.svcCategorias.getCategorias().subscribe(value=>{
      const dataObject = Object.values(value);
      if (dataObject[0] == 200){
        this.dataSource = dataObject[2];
      }
    });
  }
}
