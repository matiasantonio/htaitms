// import { CrearinformePageModule } from './../pages/crearinforme/crearinforme.module';
// import { CrearinformePage } from './../pages/crearinforme/crearinforme.page';
import { InformacionComponent } from './informacion/informacion.component';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { InformesComponent } from './informes/informes.component';
import { MedicionesComponent } from './mediciones/mediciones.component';
import { MenuComponent } from './menu/menu.component';
import { ListarpacienteComponent } from './listarpaciente/listarpaciente.component';
import { CrearpacienteComponent } from './crearpaciente/crearpaciente.component';

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





@NgModule({
  // entryComponents:[
  //   CrearinformePage
  // ],
  declarations: [
    CrearpacienteComponent,
    MenuComponent,
    MedicionesComponent,
    ListarpacienteComponent,
    InformesComponent,
    AntecedentesComponent,
    InformacionComponent,
    
  ],
  exports: [
    CrearpacienteComponent,
    MenuComponent,
    MedicionesComponent,
    ListarpacienteComponent,
    InformesComponent,
    AntecedentesComponent,
    InformacionComponent
    
  ],
    imports: [
    CommonModule,
    IonicModule,
    // CrearinformePageModule
  ]

})
export class ComponentsModule { }
