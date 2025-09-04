import { Component, signal, WritableSignal,} from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { IPatProveedor } from '../services/clases';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from '@angular/forms';
import { MatProgressBar } from '@angular/material/progress-bar';
import { SharedService } from '../services/shared-service';


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

  constructor(private s: SharedService){
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.loading.set(true);
    try {
      //this.proveedores = await this.c.Proveedores();

      this.s.getProveedores().subscribe({
        next: (data) => {
          this.proveedores = data;
          console.log('Datos de proveedores recibidos:', this.proveedores);
          this.loading.set(false);
        },
        error: (e) => console.error('Error al obtener proveedores:', e)
      });

    }
    catch (e) {
      // this.io.mensaje('Error al cargar proveedores');
      alert('Error al cargar proveedores');
      console.log(e);}
    // } finally {
    //  this.loading.set(false);
    // }
  }

  filteredItems() {
  return this.proveedores.filter(prov =>
    prov.dsProveedor?.toLowerCase()?.includes(this.filtro.toLowerCase()) ||
    prov.ema?.toLowerCase()?.includes(this.filtro.toLowerCase())
  );
}
}
