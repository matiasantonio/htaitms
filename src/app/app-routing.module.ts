import { UsuarioGuard } from './guards/usuario.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: [UsuarioGuard]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'paciente', loadChildren: './pages/paciente/paciente.module#PacientePageModule' },
  { path: 'crearpaciente', loadChildren: './pages/crearpaciente/crearpaciente.module#CrearpacientePageModule' },
  { path: 'crearinforme', loadChildren: './pages/crearinforme/crearinforme.module#CrearinformePageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
