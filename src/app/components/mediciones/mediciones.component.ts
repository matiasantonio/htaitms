import { RespuestaExamenes, Examene } from './../../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { NavextraService } from './../../services/navextra.service';
import { PacientesService } from './../../services/pacientes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.component.html',
  styleUrls: ['./mediciones.component.scss'],
})
export class MedicionesComponent implements OnInit {
  examenes: Examene[] = [];
  paciente = [];
  vacio = ""

  constructor(
              private navextraCtrl: NavextraService,  
              private pacienteCtrl: PacientesService,
              private navCtrl: NavController
              ) { }

  ngOnInit() {
    this.paciente = this.navextraCtrl.getExtras();
    if(!this.paciente){
      this.navCtrl.navigateRoot('/home')
    }
    console.log('componente paciente', this.paciente[0]);

    //  console.log('respuesta de servicio' , this.pacienteCtrl.getExamenes(this.paciente));
     this.cargarExamenes(this.paciente);
  


  }


  cargarExamenes(paciente){
    this.pacienteCtrl.getExamenes(paciente)
      .subscribe( resp => {
        if(resp.examenes.length === 0){
          paciente.target.disabled = true;
          paciente.target.complete();
          this.vacio = "si"
          return;
        }
        this.examenes.push(...resp.examenes);
        this.vacio = "no";
      });
      // if(!this.examenes){
      //   this.vacio = "si"
      // }else{
      //   this.vacio = "no"
      // }
      console.log(this.examenes);
  }

}
