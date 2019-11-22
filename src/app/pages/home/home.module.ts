import { Routes } from '@angular/router';
// import { CrearpacientePageModule } from './../crearpaciente/crearpaciente.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { CrearpacientePage } from './../crearpaciente/crearpaciente.page'; 
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  // entryComponents: [
  //   CrearpacientePage
  // ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    // CrearpacientePageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
