import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  public loginInfo: any = undefined;
  public prefix: string = '';
  public infoSesion: any = {};
  private server: string = environment.endpoint;
  private UrlAuth: string = this.server + 'Auth';
  public headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

  private options = {
    headers: this.headers
  }
  public data: any;
  public parametros: any = [];

  // constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) { }
  constructor(private http: HttpClient, private router: Router) { }

  logout(): void {
    this.loginInfo = undefined;
    this.prefix = '';
    this.infoSesion = {};
    sessionStorage.removeItem('loginInfo');
    this.router.navigate(['/'])
  }


  // login(usuario: string, pwd: string, sistema: string) {
  login(usuario: string, pwd: string) {
    return new Promise((resolve, errorEvent) => {

      // let params: string = `${this.UrlAuth}/${usuario}/${pwd.toUpperCase()}/${sistema}:${this.version}`;
      let params: string = `${this.UrlAuth}/${usuario}/${pwd.toUpperCase()}`;

      this.http.get(params, this.options)
        .subscribe(data => {
          console.log(data);
          let d: any
          // console.log(data);
          if (typeof data === 'object')
            d = data
          else
            d = JSON.parse(data);

          if (d.length > 0)
            d = d[0];

          if (d.mensaje)
            errorEvent(d)
          else {
            this.loginInfo = d;
            //this.prefix = sistema;
            this.data = d['data'];
            this.parametros = d['parametros'];

            // for (let s of this.sistemas) {
            //   if (s.prefijo === sistema) {
            //     this.urlSistema = s.url;
            //     this.sistema = s.nombre;
            //   };
            // }


            let headers = new HttpHeaders();
            headers = headers.append('x-sesion', this.loginInfo.sesion);
            headers = headers.append('x-prefix', this.prefix);
            headers = headers.append('Content-Type', 'application/json');

            this.headers = headers;

            resolve(d);
          }
        }, error => {
          let msg: string = error.message;
          switch (error.name) {
            case 'HttpErrorResponse':
              msg = 'Error de comunicación con el servidor';
              break;
          }
          errorEvent({ "mensaje": msg });
          console.log(error);
        })
    })

  }
}
