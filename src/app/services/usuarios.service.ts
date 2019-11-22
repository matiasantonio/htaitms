import { NavController } from '@ionic/angular';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaUsuario } from './../interfaces/interfaces';
import { Storage } from '@ionic/storage';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  token: string = null;
  usuario = [];

  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController) { }

  getLogin(email: string, contrasena: string) {

    const data = {email, contrasena}
    return new Promise(resolve => {
      console.log(data);
      // return this.http.get<RespuestaUsuario>(`${ URL }/patient/listpatient/?email=${this.usuario}`); 
      console.log('link a servicio',`${ URL }/user/login`,data);

      this.http.post(`${ URL }/user/login`,data)
               .subscribe( resp => {
                  console.log(resp);
                  if( resp['ok'] ){
                    this.guardarToken(resp['token'], resp['usuario']);
                    resolve(true);
                  }else{
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                  }
               });
    });

  }


  async guardarToken(token :string, usuario :any){
    this.token = token;
    await this.storage.set('token',token);
    await this.storage.set('usuario',usuario);
  }
  

  async cargarToken ( ){
    this.token = await this.storage.get('token') || null;
    // console.log('token cargado',this.token)
  }

  async validanToken(): Promise<boolean>{

    await this.cargarToken();
    if(!this.token){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve =>{
      const headers = new HttpHeaders({
        'x-token': this.token
      })

      this.http.get(`${URL}/user/`, {headers})
        .subscribe( resp=>{
          if( resp['ok']){
            this.usuario = resp['usuario']
            resolve(true);
          }else{
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
          
        })
    });
  }


logout() {
  this.token = null;
  this.usuario = null;
  this.storage.clear();
  this.navCtrl.navigateRoot('/login', {animated:true})
}

}
