import { Component, signal, ViewChild, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from "./inicio/inicio";
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared-service';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule, MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { Menu } from "./menu/menu"; 
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inicio, CommonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatListModule, MatSidenavContainer, MatSidenavModule, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('Top Roll');
  // public MenuForzarCollapse:WritableSignal<boolean> = signal(false);

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor( public auth: Auth, public s :SharedService){
    
  }

  //devuelve true si la página está en pantalla completa y false si no lo está.
  isFullscreen(): boolean {
    return !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement || // Safari
      (document as any).mozFullScreenElement || // Firefox
      (document as any).msFullscreenElement // IE/Edge
    );
  }

  salir() {
    this.auth.logout();
    
  }
}
