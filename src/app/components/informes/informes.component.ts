import { Informe } from './../../interfaces/interfaces';
import { NavController, ModalController } from '@ionic/angular';
import { PacientesService } from './../../services/pacientes.service';
import { NavextraService } from './../../services/navextra.service';
import { Component, OnInit } from '@angular/core';
import { CrearinformePage } from './../../pages/crearinforme/crearinforme.page'
// import { CrearpacienteComponent } from './../crearpaciente/crearpaciente.component'

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss'],
})
export class InformesComponent implements OnInit {
  informes: Informe[] = [];
  paciente = [];

  constructor(
    private navextraCtrl: NavextraService,  
    private pacienteCtrl: PacientesService,
    private navCtrl: NavController,
    // private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.paciente = this.navextraCtrl.getExtras();
    
    if(!this.paciente){
      this.navCtrl.navigateRoot('/home')
    }
    this.cargarInformes(this.paciente);
    console.log( this.informes );
  }
  
  cargarInformes(paciente){
    this.pacienteCtrl.getInformes(paciente)
      .subscribe( resp => {

        if(resp.informes.length === 0){
          paciente.target.disabled = true;
          paciente.target.complete();
          return;
        }
        this.informes.push( ...resp.informes );
    })
  }

  // async abrirModal(){
  //   console.log('holi');
  //   const modal = await this.modalCtrl.create({
  //     component: CrearinformePage
  //   });

  //   return await modal.present();

  // }

  crearInforme(){
    this.navextraCtrl.setExtras(this.paciente)
    console.log(this.paciente)
    this.navCtrl.navigateRoot('/crearinforme',{animated: true});
  }

}
