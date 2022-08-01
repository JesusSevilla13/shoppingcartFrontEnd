import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditCategoriasComponent } from './categorias/edit-categorias/edit-categorias.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { EditDireccionesComponent } from './direcciones/edit-direcciones/edit-direcciones.component';
import { EditProductosComponent } from './productos/edit-productos/edit-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { EditUsuarioComponent } from './usuario/edit-usuario/edit-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'direcciones',
    component: DireccionesComponent,
  },
  {
    path: 'categorias/editar/:id',
    component: EditCategoriasComponent,
  },
  {
    path: 'productos/editar/:id',
    component: EditProductosComponent,
  },
  {
    path: 'usuario/editar/:id',
    component: EditUsuarioComponent,
  },
  {
    path: 'direcciones/editar/:id',
    component: EditDireccionesComponent,
  },
  {
    path: 'comprar',
    component: CarritoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
