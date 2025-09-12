import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatProveedor } from './clases';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public bandera: any= undefined;

  private apiUrl = 'http://localhost:5169/api/Proveedores'; 
  //private apiUrl = 'https://localhost:7077/api/Proveedores';
  // 4. Inyecta HttpClient en el constructor
  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }

  getProveedores(): Observable<IPatProveedor[]> {
    return this.http.get<IPatProveedor[]>(this.apiUrl);
  }

  getProveedor(id: number): Observable<IPatProveedor> {
    // Construye la URL para obtener un solo proveedor, por ejemplo:
    // https://localhost:7077/api/Proveedores/1
    const url = `${this.apiUrl}/${id}`; 
    return this.http.get<IPatProveedor>(url);
  }

  guardarProveedor(proveedor?: IPatProveedor): Observable<IPatProveedor> {
    // La API de .NET espera un POST para crear un nuevo recurso
    return this.http.post<IPatProveedor>(this.apiUrl, proveedor);
  }

  actualizarProveedor(proveedor?: IPatProveedor): Observable<IPatProveedor> {
    // La API de .NET espera un PUT para actualizar un recurso existente
    // La URL debe incluir el ID del proveedor
    const url = `${this.apiUrl}/${proveedor?.cdProveedor}`;
    return this.http.put<IPatProveedor>(url, proveedor);
  }

  /////

  mensaje(m: string) {
    this.snackBar.open(m, "", {
      duration: 3000,
    })
  }
  

  // setEntidad(entidad: string, param: any, nolog: boolean = false) {
  //   return new Promise((resolve, errorEvent) => {

  //     let urlParams = new URLSearchParams();
  //     urlParams.append('entidad', entidad);
  //     urlParams.append('value', JSON.stringify(param));
  //     // console.log(JSON.stringify(param));
  //     let params: string = urlParams.toString();
  //     //  console.log(this.auth.headers)
  //     this.http.post(this.auth.UrlEntidad, params, { headers: this.auth.headers })
  //       .subscribe({
  //         next: (resultado) => {
  //           if (!nolog) this.addStack(params, resultado);
  //           let d: any = resultado;//JSON.parse(resultado.toString())
  //           if (d[0]?.isException) {
  //             this.mensaje(d[0]?.mensaje);
  //             errorEvent(d[0]);
  //             if (d[0].error == 1) {
  //               this.auth.logout();
  //             }
  //           }
  //           else {
  //             resolve(d);
  //           }
  //         }, error: (error) => {
  //           let msg: string = error.message;
  //           errorEvent({ "mensaje": msg });
  //           console.error(error);
  //         }
  //       });
  //   })
  // }

  
  // getEntidad(entidad: string, param?: any, nolog: boolean = false) {
  //   return new Promise((resolve, errorEvent) => {

  //     if (this.auth.loginInfo?.sesion == null) {
  //       return;
  //     }

  //     let params: string;
  //     if (typeof param === 'number' && Number.isInteger(param)) {
  //       param = { id: param };
  //     }

  //     if (param)
  //       params = `${this.auth.UrlEntidad}/${entidad}/${JSON.stringify(param)}`;
  //     else
  //       params = `${this.auth.UrlEntidad}/${entidad}`;


  //     this.http.get<any>(params, { headers: this.auth.headers })
  //       .subscribe({
  //         next: (resultado) => {
  //           if (!nolog) this.addStack(params, resultado);
  //           let d: any = resultado; //JSON.parse(resultado.toString())
  //           // console.log(resultado);
  //           if (d[0]?.isException) {
  //             this.mensaje(d[0]?.mensaje);
  //             errorEvent(d[0]);
  //             if (d[0].mensaje.substring(0, 11) == 'SESSIONERR:') {
  //               this.auth.logout();
  //             }
  //           }
  //           else {
  //             // console.log(d);
  //             resolve(d);
  //           }
  //         }, error: (error) => {
  //           console.log(params);
  //           // console.log(1)
  //           let msg: string = error.message;
  //           if (msg.substring(0, 2) == '[{') {
  //             let d = JSON.parse(msg);
  //             msg = d.mensaje;
  //             if (d[0].error == 1) {
  //               this.auth.logout();
  //             }
  //           }

  //           this.mensaje(msg);
  //           errorEvent({ "mensaje": msg });

  //           console.error(error);
  //         }
  //       });
  //   });
  // }


}
