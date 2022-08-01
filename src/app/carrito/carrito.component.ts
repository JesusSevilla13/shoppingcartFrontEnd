import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { ProductosService } from '../services/productos.service';
import { Categorias } from '../shared/model/Categorias';
import { Productos } from '../shared/model/Productos';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listCategorias: Categorias[]=[];
  listProductos: Productos []=[];

  constructor(private svcCategorias: CategoriasService, svcProductos: ProductosService) { }

  ngOnInit(): void {
    this.svcCategorias.getCategorias().subscribe(value=>{
      const dataObject = Object.values(value);
      if (dataObject[0] == 200){
        this.listCategorias = dataObject[2];
      }
    });
    
  }

}
