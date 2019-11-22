import { UiServiceService } from './../../services/ui-service.service';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
    loginUser = {
      email: 'matiascornejo933@gmail.com',
      contrasena: '654321'
    }

  constructor(
              private userCtrl: UsuariosService,
              private navCtrl: NavController,
              // private toasCtrl: ToastController,
              private uiCtrl: UiServiceService
              ) { }

  ngOnInit() {


  }


 async login (fLogin: NgForm){

    if(fLogin.invalid) {return;}

    console.log(this.loginUser);
    console.log(fLogin.valid);
    const valido = await this.userCtrl.getLogin( this.loginUser.email, this.loginUser.contrasena);
    console.log('valido', valido);
    if(valido){
       this.navCtrl.navigateRoot('/home', {animated: true});
     }else{
       this.uiCtrl.presentAlert('Usuario y contraseña no son correctas');
    }
    
  }



}
