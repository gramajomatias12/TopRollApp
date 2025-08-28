// import { Component } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas como ngIf si las usas
import { FormsModule } from '@angular/forms'; // Necesario para ngModel

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Para el ícono de visibilidad de contraseña
import { MatToolbarModule } from '@angular/material/toolbar'; // Opcional, para un encabezado

import { Router } from '@angular/router'; // Para la navegación

@Component({
  selector: 'app-inicio',
  // imports: [MatButtonModule, CommonModule],
  imports: [CommonModule,
    FormsModule, // Para usar ngModel
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

  public bandera: boolean= true;
  constructor(private router: Router){
    
  }
  
  // continuar() {
  //   // Usa el método navigate() para navegar a la ruta del menú
  //   this.router.navigate(['/menu']);
  //   this.bandera=false;

  // }

  username = '';
  password = '';
  hidePassword = true; // Para alternar la visibilidad de la contraseña

 

  login() {
    // Aquí iría tu lógica de autenticación
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    // Simulación de autenticación exitosa
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/menu']); // Redirige al menú principal
      this.bandera=false;
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }

}
