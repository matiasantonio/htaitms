import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { PacientesService } from './../../services/pacientes.service';
import { NavextraService } from './../../services/navextra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearpaciente',
  templateUrl: './crearpaciente.page.html',
  styleUrls: ['./crearpaciente.page.scss'],
})
export class CrearpacientePage implements OnInit {

  //Fecha
  fechaNaci:Date = new Date();
  customPickerOption;
  customDate;

  genders: Array<string>;
  arms: Array<string>;
  confirmations: Array<string>;


  paciente: [];
  antecedente: [];
  usuario = [];
  token: string = null;

  postpaciente = {

    //Información paciente
    nombres: " ",
    apellidos: " ",
    rut: " ",
    telefono: "", 
    modalidad: 'cd',
    sn_equipo: " ",
    fecha_nacimiento: "",
    correo: "",
    medico_tratante: "",
    estado: "activado",
    establecimiento: "",

    // Antecedentes
    sexo: "",
    altura: "",
    peso: "",
    pasistolicainicial: "",
    padiastolicainicial: "",
    brazo: "",
    tabaquismo: "",
    extabaquismo: "",
    colesterol_alto: "",
    enfermedades_renales: "",
    antecedentes_hta_familiar: "",
    sedentarismo:"",
    diabetes:"",
    enfermedades_cardiacas: "",
    accidentes_cardiovasculares: "",
    comentario: "",
  }


  constructor(private navextraCtrl: NavextraService,  
    private pacienteCtrl: PacientesService,
    private storageCtrl: Storage,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarToken();

    //fecha
    this.genders = [
      "Masculino",
      "Femenino"
    ];
    this.arms = [
      "Izquierdo",
      "Derecho",
      "Ambos"
    ];
    this.confirmations = [
      "Si",
      "No",
      "Sin respuesta"
    ];
    this.customPickerOption= {
      buttons: [{
        text: 'Save',
        handler: ( evento) => {
          console.log('Clicked Save!');
          console.log(evento.day.value);
        }
      },
      {
        text: 'Log',
        handler: (evento) => {
          console.log('Clicked Log. Do not Dismiss.');
          console.log(evento);
        }
      }]
    }
  }

async   crearPaciente(){
    
    console.log(this.postpaciente);
    this.pacienteCtrl.createPaciente(this.postpaciente)

 
  }

  

  async cargarToken ( ){
    this.token = await this.storageCtrl.get('token') || null;
    this.usuario = await this.storageCtrl.get('usuario') || null;
    this.postpaciente['medico_tratante'] = this.usuario["_id"]
    this.postpaciente['establecimiento'] = this.usuario["establecimiento"]
    console.log('token cargado',this.token)
    console.log('usuario cargado',this.usuario["_id"])
    console.log('dato',this.postpaciente )
  }

  onClick(){ 
  }

  

  cambioFecha( event ){
    console.log('ionChange',event);
    console.log('Date', new Date(event.detail.value));
  }

}
