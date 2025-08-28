import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from "./inicio/inicio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Top Roll');
}
