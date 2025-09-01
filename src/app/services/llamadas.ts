import { Injectable } from '@angular/core';
import { IPatProveedor } from './clases';
import { SharedService } from './shared-service';

@Injectable({
  providedIn: 'root'
})
export class Llamadas {
  
  constructor(public s: SharedService){}

  Proveedores(id?: number, filtro?: string) {
    filtro = '';
    let e: string = 'Proveedores';
    //return new Promise<IPatProveedor[]>((resolve, errorEvent) => { this.s.getEntidad(e, { id: id, filtro: filtro }).then((resolveE: any) => { resolve(resolveE as IPatProveedor[]); }).catch(errorEventE => { errorEvent(errorEventE); }) });
  }

  guardarProveedor(proveedor: IPatProveedor) {
    let e: string = 'Proveedores';
    //return new Promise<IPatProveedor[]>((resolve, errorEvent) => { this.s.setEntidad(e, proveedor).then((resolveE: any) => { resolve(resolveE as IPatProveedor[]); }).catch(errorEventE => { errorEvent(errorEventE); }) });
  }
}
