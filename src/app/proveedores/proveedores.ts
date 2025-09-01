import { Component, signal, WritableSignal } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { IPatProveedor } from '../services/clases';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from '@angular/forms';
import { MatProgressBar } from '@angular/material/progress-bar';


@Component({
  selector: 'app-proveedores',
  imports: [MatToolbarModule, FormsModule, MatProgressBar, MatButtonModule, MatInputModule, MatIconModule, MatListModule],
  templateUrl: './proveedores.html',
  styleUrl: './proveedores.scss'
})

export class Proveedores {
  public loading: WritableSignal<boolean> = signal(false);
  public proveedores: IPatProveedor[] = [];
  public filtro: string = '';

  constructor(){
    this.cargarProveedores();
  }

  async cargarProveedores() {
    this.loading.set(true);
    try {
      //this.proveedores = await this.c.Proveedores();
      this.proveedores= [
        {
          id: 1,
          n: 'Francico Bobinas',
          dir: 'Calle Falsa 123',
          tel: '555-1234',
          ema: 'contactoA@email.com'
        },
        {
          id: 2,
          n: 'El Proceso Bobinas',
          dir: 'Avenida Siempre Viva 456',
          tel: '555-5678',
          ema: 'ventasB@email.com'
        },
        {
          id: 3,
          n: 'Luis Bolsas',
          dir: 'Plaza Mayor 789',
          tel: '555-9012',
          ema: 'infoC@email.com'
        },
        {
          id: 4,
          n: 'Ariel cuchillas',
          dir: 'moron sur 721',
          tel: '555-9012',
          ema: 'infoC@email.com'
        },
        {
          id: 5,
          n: 'ramon piedras',
          dir: 'villa urquiza 265',
          tel: '555-9012',
          ema: 'infoC@email.com'
        },

      ];
    }
    catch (e) {
      // this.io.mensaje('Error al cargar proveedores');
      alert('Error al cargar proveedores');
      console.log(e);
    } finally {
      this.loading.set(false);
    }
  }

  filteredItems() {
  return this.proveedores.filter(prov =>
    prov.n?.toLowerCase()?.includes(this.filtro.toLowerCase()) ||
    prov.ema?.toLowerCase()?.includes(this.filtro.toLowerCase())
  );
}
}
