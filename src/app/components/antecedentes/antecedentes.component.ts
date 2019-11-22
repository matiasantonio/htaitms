import { UsuariosService } from './../../services/usuarios.service';
import { PacientesService } from './../../services/pacientes.service';
import { NavController } from '@ionic/angular';
import { NavextraService } from './../../services/navextra.service';
import { Antecedente, Paciente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.scss'],
})
export class AntecedentesComponent implements OnInit {
  paciente = "";
  antecedesntes: Antecedente;

  constructor(
    private navextraCtrl: NavextraService, 
    private navCtrl: NavController,
    private pacienteCtrl: PacientesService,
    private usuarioCtrl: UsuariosService

  ) { }

  ngOnInit() {
    this.paciente = this.navextraCtrl.getExtras();
    if(!this.paciente){
      this.navCtrl.navigateRoot('/home')
    }
   
    this.cargarAntecedentes(this.paciente);
    // console.log('antecedentes del paciente', this.antecedesntes);
  }

  cargarAntecedentes(paciente){
    this.usuarioCtrl.validanToken();
    this.pacienteCtrl.getAntecedentes(paciente)
      .subscribe((resp) =>{
        if(resp.antecedentes.length === 0){
          paciente.target.disabled = true;
          paciente.target.complete();
          return;
        }
        console.log('respuesta servicio',resp.antecedentes[0]);
        this.antecedesntes = resp.antecedentes[0];
      })
      
  }




  

}
