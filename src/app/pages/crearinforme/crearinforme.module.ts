import { TestPageModule } from './../test/test.module';
import { TestPage } from './../test/test.page';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearinformePage } from './crearinforme.page';

const routes: Routes = [
  {
    path: '',
    component: CrearinformePage
  }
];

@NgModule({
//borrar esto
  // entryComponents: [
  //   TestPage
  // ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    // TestPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearinformePage]
})
export class CrearinformePageModule {}
