import { Component, signal, WritableSignal } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { PatProveedor } from '../../services/clases';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule} from '@angular/router';
import { SharedService } from '../../services/shared-service';


@Component({
  selector: 'app-proveedor',
  imports: [MatToolbarModule,RouterModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatListModule, MatFormFieldModule, ReactiveFormsModule ],
  templateUrl: './proveedor.html',
  styleUrl: './proveedor.scss'
})
export class Proveedor {

  public id: number;
  public loading: WritableSignal<boolean> = signal(false);
  public modoEditar: WritableSignal<boolean> = signal(false);
  public proveedor?: PatProveedor;

   constructor(public router: Router, private route: ActivatedRoute, private s: SharedService)
  {
    this.id = parseInt(route.snapshot.paramMap.get("id") || '0');
    if (!this.id) {
      this.modoEditar.set(true);
    }
    else {
      this.cargarProveedor(this.id);
    }
  }

  public form: FormGroup = new FormGroup(
  {
      cdProveedor: new FormControl(undefined, []),
      dsProveedor: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      dsDireccion: new FormControl('', []),
      dsTelefono: new FormControl('', [Validators.pattern('^[0-9\\s\\-()\\+]+$')]),
      dsEmail: new FormControl('', [Validators.email])
  });

  editar() {
    this.modoEditar.set(true);
  }
  
  guardar() {
    if (!this.id) {
      // Si es un nuevo registro, usa el método POST
      this.form.patchValue({ cdProveedor: 0 });
      this.s.guardarProveedor(this.form.value).subscribe({
        next: (data) => {
          alert('Proveedor guardado con éxito.');
          this.router.navigate(['/menu/proveedores']); // Vuelve a la lista
        },
        error: (e) => console.error('Error al guardar el proveedor:', e.error)
      });
    } else {
      // Si ya existe, usa el método PUT
      this.s.actualizarProveedor(this.form.value).subscribe({
        next: (data) => {
          alert('Proveedor actualizado con éxito.');
          this.router.navigate(['/menu/proveedores']); // Vuelve a la lista
        },
        error: (e) => console.error('Error al actualizar el proveedor:', e)
      });
    }
  }

  cargarProveedor(id: number){
    this.loading.set(true);
    try {
      //this.proveedores = await this.c.Proveedores();
      if (id !== 0) {
      // Si el ID es diferente de 0, llama al servicio para cargar los datos del proveedor
      this.s.getProveedor(+this.id).subscribe({
        next: (data) => {
          this.proveedor = data;
          this.form.reset();
          this.form.patchValue(this.proveedor);
        },
        error: (e) => console.error('Error al cargar el proveedor:', e)
      });
      }
    }
    catch (e) {
      // this.io.mensaje('Error al cargar proveedores');
      alert('Error al cargar proveedores');
      console.log(e);
    }
    finally {
     this.loading.set(false);
    }
  }

  
  // async cargar(id: number) {
  //   this.loading.set(true);
  //   try {
  //     let obj: any = await this.c.Proveedores(id);
  //     obj[0].tip = obj[0].tip ?? 0;
  //     this.item = obj[0];
  //     console.log(obj)
  //     this.form.reset();
  //     this.form.patchValue(obj[0])
  //   }
  //   catch (e) {
  //     this.io.mensaje('Error al cargar el sector');
  //     console.log(e);
  //   } finally {
  //     this.loading.set(false);
  //   }
  // }
 
  cancelar() {
    //this.cargar(this.id);
    //this.modoEditar.set(false);
  }
}
