import { NavextraService } from './../../services/navextra.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

@ViewChild(IonSegment,{static: true}) segment: IonSegment;


pacinte = [];
valorSeg: string = "";

  constructor(public navextraCtrl: NavextraService) { }

  ngOnInit() {
    console.log("estoy en pacientes");
    this.pacinte = this.navextraCtrl.getExtras();
    this.valorSeg = this.navextraCtrl.getOption();
    
    if(!this.valorSeg){
      this.valorSeg = "examenes";
    }
    
    console.log("este es el segmento" , this.valorSeg);
    // console.log(this.navextraCtrl.getExtras());
    
  }


  async segmentChanged(evento){
    this.valorSeg = evento.detail.value;
    console.log(this.valorSeg)
    }
}
