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
import { SharedService } from '../services/shared-service';
import { Auth } from '../services/auth';

declare const md5: any;

@Component({
  selector: 'app-inicio',
  // imports: [MatButtonModule, CommonModule],
  imports: [CommonModule,
    FormsModule,
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
  hide = true;
  //sSelected: any;
  //sistemas: any = [];
  loading: boolean = false;

  constructor(private router: Router, public auth: Auth, public s: SharedService) {
    if (sessionStorage.getItem('loginInfo')) {

      setTimeout(() => {

        this.auth.loginSession(JSON.parse(sessionStorage.getItem('loginInfo') || '{}'));
        // this.auth.loginInfo = JSON.parse(sessionStorage.getItem('loginInfo') || '{}');
        // console.log(this.auth.loginInfo);
        // this.router.navigate([/${this.auth.urlSistema.toLowerCase()}]);
        this.router.navigate(['/menu']);
    },100);

  }
  }
  username = '';
  password = '';
  hidePassword = true; // Para alternar la visibilidad de la contraseña

  // login() {
  //   // Aquí iría tu lógica de autenticación
  //   //console.log('Usuario:', this.username);
  //   //console.log('Contraseña:', this.password);

  //   // Simulación de autenticación exitosa
  //   if (this.username === 'admin' && this.password === 'admin') {
  //     this.s.bandera=true;
  //     this.router.navigate(['/menu']); // Redirige al menú principal
  //   } else {
  //     alert('Usuario o contraseña incorrectos.');
  //   }
  // }

  ingresar(usuario: string, pwd: string) 
  {
      this.loading = true;
      // this.auth.login(usuario, md5(pwd), this.sSelected.prefijo).then((resultado) => {
        this.auth.login(usuario, md5(pwd)).then((resultado) => {
        //  localStorage.setItem('sistema', this.sSelected.prefijo);
        sessionStorage.setItem('loginInfo', JSON.stringify(this.auth.loginInfo));
       
        // if (this.router.url.substr(0, this.auth.urlSistema.length + 2) !== `/${this.auth.urlSistema.toLowerCase()}/`) {
        //   this.router.navigate([`/${this.auth.urlSistema.toLowerCase()}`]);
        // }
        
        //this.router.navigate([`/menu/home`]);
        this.router.navigate(['/menu']);
        this.loading = false;
      }).catch(error => {
        this.loading = false;
        this.s.mensaje(error.mensaje);
      })
    }
  
  }
  
