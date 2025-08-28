import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Proveedores } from './proveedores/proveedores';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { MateriaPrima } from './materia-prima/materia-prima';
import { Home } from './home/home';
import { Ingresos } from './ingresos/ingresos';
import { Egresos } from './egresos/egresos';
import { Pedidos } from './pedidos/pedidos';
import { Clientes } from './clientes/clientes';

export const routes: Routes = [

  // La ruta principal, que cargará el componente de inicio
  
  { path: 'inicio', component: Inicio },

  // La ruta del menú. Las demás rutas serán sus hijas
  {
    path: 'menu',
    component: Menu,
    children: [
      // Cuando la URL sea '/menu' se cargará esta ruta por defecto
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      
      { path: 'home', component: Home },
      { path: 'proveedores', component: Proveedores },
      { path: 'materia-prima', component: MateriaPrima },
      { path: 'productos', component: Productos},
      { path: 'ingresos', component: Ingresos},
      { path: 'egresos', component: Egresos},
      { path: 'pedidos', component: Pedidos},
      { path: 'clientes', component: Clientes},
      // Agrega aquí todas las demás rutas de tu menú
    ]
  }
 

];
