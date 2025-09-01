import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from "./inicio/inicio";
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inicio, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('Top Roll');

  constructor( public s: SharedService){
    this.s.bandera=false;
  }
}
