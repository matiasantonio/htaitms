import { Paciente } from './../../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { NavextraService } from './../../services/navextra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
})
export class InformacionComponent implements OnInit {
  // informes: Examene[] = [];
  // paciente: Paciente[] = [];
  paciente: Paciente;
  constructor(
    private navextraCtrl: NavextraService, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.paciente = this.navextraCtrl.getExtras();
    if(!this.paciente){
      this.navCtrl.navigateRoot('/home')
    }
    console.log(this.paciente)
  }

}
