import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

  public bandera: boolean= true;
  constructor(private router: Router){
    
  }
  
  continuar() {
    // Usa el método navigate() para navegar a la ruta del menú
    this.router.navigate(['/menu']);
    this.bandera=false;

  }
}
