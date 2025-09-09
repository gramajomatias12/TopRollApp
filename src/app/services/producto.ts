
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import { ResponseProducto } from './clases';

@Injectable({
     providedIn: 'root'
})
export class Producto {
     private http = inject(HttpClient);
     private baseUrl: string = appsettings.apiUrl;
     constructor() { }
     lista() : Observable<ResponseProducto>{
          return  this.http.get<ResponseProducto>(`${this.baseUrl}Producto/Lista`)
    }

}