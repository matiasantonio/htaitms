import { CrearpacientePage } from './../crearpaciente/crearpaciente.page';
import { CrearinformePage } from './../crearinforme/crearinforme.page';
import { NavextraService } from './../../services/navextra.service';
import { Storage } from '@ionic/storage';
import { PacientesService } from './../../services/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';
//, ModalController
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  pacienteBuscar = "";

  usuario = [];
  
  token: string = null;


  pacientes: Paciente[] = [];

  constructor(
    private dataService: PacientesService,
    private menuCtrl: MenuController,
    private storageCtrl: Storage,
    public navextraCtrl: NavextraService,
    // public modalController: ModalController
    ){}

  ngOnInit(){
    this.cargarToken();

  }

  async cargarToken ( ){
    this.token = await this.storageCtrl.get('token') || null;
    this.usuario = await this.storageCtrl.get('usuario') || null;
    // console.log('token cargado',this.token)
    // console.log('usuario cargadollllll',this.usuario["_id"])
    this.cargarListado(this.usuario["_id"], this.token);

  }

  //Cargar listado
  cargarListado( usuario :any,token :string,){
    console.log('cargando listado');
    this.dataService.getPacientes(usuario,token)
      .subscribe(resp =>{
        console.log('resp',resp);
         this.pacientes.push( ...resp.pacientes);
         console.log('pacientes',this.pacientes);
      });
  }

  seleccionar( paciente){
    // console.log('HOLA');
    console.log(paciente)
    this.navextraCtrl.setExtras(paciente)
  }


  toggleMenu(){
    this.menuCtrl.toggle();
  }

  // async abrirModal(){
  //   const modal = await this.modalController.create({
  //     component: CrearpacientePage,
  //     componentProps: {
  //       perro: "guau",
  //       gato: 'miu'
  //     }
  //   });
  //   return await modal.present();
  // }

  buscar( evento){
    // console.log(evento);
    this.pacienteBuscar = evento.detail.value;
    
  }
  

}
