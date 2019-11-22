import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavextraService {

  extras: any;
  option: any;

  constructor() { }

  public setExtras(data){
    this.extras = data;
  }

  public getExtras(){
    return this.extras;
  }
  

  public setOption(option){
    this.option = option;
  }

  public getOption(){
    return this.option;
  }
}
