import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CrearpacientePage } from './crearpaciente.page';

//esto se quita
const routes: Routes = [
  {
    path: '',
    component: CrearpacientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearpacientePage]
})
export class CrearpacientePageModule {}
