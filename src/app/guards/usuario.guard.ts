import { UsuariosService } from './../services/usuarios.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {

  constructor(private usuarioService: UsuariosService){}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean{
    return this.usuarioService.validanToken();
  }
  
}
