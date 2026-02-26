import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  
})
export class HomePage {

  constructor() {}

  valorDolar='';
  valorDoacao='';
  valorReais='';
  converter(){
    this.valorReais=(parseFloat(this.valorDoacao)*
    parseFloat(this.valorDolar)).toFixed(2);
  }
}
