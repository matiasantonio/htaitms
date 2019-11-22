import { Observable } from 'rxjs';
import { RespuestaPacientes, RespuestaExamenes, RespuestaAntecedentes, RespuestaInforme, Usuario, Paciente, Informe } from './../interfaces/interfaces';
import { UsuariosService } from './usuarios.service';
import { Injectable } from '@angular/core';
  
import { environment } from './../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  usuario = '';
  token:string = '';
  paciente = '';
  pacienteobj = [];
  antecedentes = [];

  constructor(  

                private http: HttpClient,
                private storage: Storage,
                private usuarioCtrl: UsuariosService 
                ) { }

  getPacientes( userin, tokenin ){

    // this.paginaPost ++;
    this.usuario = userin;
    this.token = tokenin;
    
    console.log('usuario', this.usuario);
    console.log('token', this.token);
    
    console.log('URL', `${ URL }/patient/listpatient/?id_usuario=${this.usuario}`);
    return this.http.get<RespuestaPacientes>(`${ URL }/patient/listpatient/?id_usuario=${this.usuario}`); 
  }

  getPaciente(pacientein, tokenin){

    this.paciente = pacientein;
    this.token = tokenin;
  
  }

  getExamenes( paciente: object){
    this.usuarioCtrl.validanToken();
    console.log('este es el token', this.token);
    console.log('y este es el id', paciente);
    this.paciente = paciente["_id"];
    const headers = new HttpHeaders({
      'x-token': this.token
    })
    return this.http.get<RespuestaExamenes>(`${ URL }/exam/listexam/?id_paciente=${this.paciente}`, {headers})
  }

  getAntecedentes(paciente: object){
    this.usuarioCtrl.validanToken();
    this.paciente = paciente["_id"];
    const headers = new HttpHeaders({
      'x-token': this.token
    })
    return this.http.get<RespuestaAntecedentes>(`${URL}/record/viewrecord/?id_paciente=${this.paciente}`, {headers})

  }

  getInformes(paciente: object){
    this.usuarioCtrl.validanToken();
    this.paciente = paciente["_id"];
    const headers = new HttpHeaders({
      'x-token': this.token
    })
    return this.http.get<RespuestaInforme>(`${URL}/inform/listinform/?id_paciente=${this.paciente}`, {headers})

  }

  createPaciente(paciente: object){
    this.usuarioCtrl.validanToken();
    const headers = new HttpHeaders({
      'x-token': this.token
    })
    console.log('token ingresado', headers)
    this.http.post<Paciente>(`${URL}/patient/create2/`,paciente, {headers})
      .subscribe( resp => {
        console.log(resp);
      })

  }

  createInforme(informe: object){
    this.usuarioCtrl.validanToken();
    const headers = new HttpHeaders({
      'x-token': this.token
    })
    this.http.post<Informe>(`${URL}/inform/create/`,informe, {headers})
      .subscribe( resp => {
        console.log(resp);
      })
  }

}
