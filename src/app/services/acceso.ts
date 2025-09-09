import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Login, ResponseAcceso, Usuario } from './clases';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Acceso {

  private http = inject(HttpClient);
  private baseUrl: string = appsettings.apiUrl;

     constructor() { }

     registrarse(objeto: Usuario): Observable<ResponseAcceso> {
          return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Registrarse`, objeto)
     }

     login(objeto: Login): Observable<ResponseAcceso> {
          return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Login`, objeto)
     }

     validarToken(token: string): Observable<ResponseAcceso> {
          return this.http.get<ResponseAcceso>(`${this.baseUrl}Acceso/ValidarToken?token=${token}`)
    }
}
