import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  constructor(  private usuarioCtrl :UsuariosService,
                private menuCtrl: MenuController,) { }

  ngOnInit() {

  }

  logout(){
    this.usuarioCtrl.logout();
    this.toggleMenu();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }


}
