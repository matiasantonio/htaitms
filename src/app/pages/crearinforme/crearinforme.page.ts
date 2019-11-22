import { PacientesService } from './../../services/pacientes.service';
import { Storage } from '@ionic/storage';
import { NavextraService } from './../../services/navextra.service';
import { CrearpacientePage } from './../crearpaciente/crearpaciente.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-crearinforme',
  templateUrl: './crearinforme.page.html',
  styleUrls: ['./crearinforme.page.scss'],
})
export class CrearinformePage implements OnInit {
  usuario = []
  paciente = [];
  valorSeg = "informes";

  informe = {
    folio: 1234,
    recomendacion_medica: "",
    medico_tratante: "",
    paciente: "",
  }

  constructor(
    private navCtrl: NavController,
    private navextraCtrl: NavextraService, 
    private storageCtrl: Storage,
    private pacienteCtrl: PacientesService
    ) { }

  ngOnInit() {
    
    // console.log('esto es ', this.paciente)
    this.cargarDatos()
  }

  async cargarDatos(){
    this.paciente = this.navextraCtrl.getExtras();
    this.usuario = await this.storageCtrl.get('usuario') || null;
    console.log(this.paciente,this.usuario);

  }

  regresarModal(){
    console.log(this.valorSeg);
    this.navextraCtrl.setExtras(this.paciente)
    this.navextraCtrl.setOption(this.valorSeg)
    this.navCtrl.navigateRoot('/paciente')
  }

  crearInforme(){
    this.informe['paciente'] = this.paciente['_id']
    this.informe['medico_tratante'] = this.usuario['_id']
    console.log(this.informe);
    this.pacienteCtrl.createInforme(this.informe)
    
  }

}
