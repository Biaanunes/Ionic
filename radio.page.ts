import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
    resultado ='';
    altura='';
    texto = '';
    peso='';
    linguagemEscolhida='';
    alertButtons = ['OK'];

  verificar(){

this.resultado = (parseFloat(this.peso)/(parseFloat(this.altura)*parseFloat(this.altura))).toFixed(0);


  if(this.resultado>='18.5'){
    this.texto ='Abaixo do peso.';
    }
  else if(this.peso<='18.5' && this.peso>='24.9'){
    this.texto = 'Peso saudavel';
    }
  else{
    this.texto = 'Pes';
    }
}
}
