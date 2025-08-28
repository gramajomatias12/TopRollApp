import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Proveedores } from './proveedores/proveedores';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';

export const routes: Routes = [

  // La ruta principal, que cargará el componente de inicio
  
  { path: 'inicio', component: Inicio },

  // La ruta del menú. Las demás rutas serán sus hijas
  {
    path: 'menu',
    component: Menu,
    children: [
      // Cuando la URL sea '/menu' se cargará esta ruta por defecto
      //{ path: '', redirectTo: 'proveedores', pathMatch: 'full' },
      
      { path: 'proveedores', component: Proveedores },
      { path: 'productos', component: Productos},
      // Agrega aquí todas las demás rutas de tu menú
    ]
  }
 

];
