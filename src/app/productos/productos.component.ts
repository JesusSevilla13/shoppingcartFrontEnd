import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../shared/model/Productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  displayedColumns: String[] = ['id', 'nombre','precio','id_Categorias']
  dataSource!: Productos[];

  constructor(private svcProductos: ProductosService) { }

  ngOnInit(): void {
    this.cargarData()
  }

  cargarData(){
    this.svcProductos.getProductos().subscribe(value=>{
      const dataObject = Object.values(value);
      if (dataObject[0] == 200){
        this.dataSource = dataObject[2];
      }
    });
  }
}
