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
    valorCompra='';
    texto = '';
    tiposDesconto='';
    linguagemEscolhida='';
    alertButtons = ['OK'];

  verificar(){

  if(this.tiposDesconto=='vista'){
    this.linguagemEscolhida='Crédito a vista';
    this.texto ='Crédito a vista: 5% de desconto';
    this.resultado = (parseFloat(this.valorCompra) - (parseFloat(this.valorCompra)*0.05)).toFixed(2);
    }
  else if(this.tiposDesconto=='prazo'){
    this.linguagemEscolhida='Crédito a prazo';
    this.texto = 'Crédito a prazo: sem descontos';
    this.resultado = this.valorCompra;
    }
  else{
    this.linguagemEscolhida='Pix';
    this.texto = 'Pix: 15% de desconto';
    this.resultado = (parseFloat(this.valorCompra) - (parseFloat(this.valorCompra)*0.15)).toFixed(2);
    }
}
}
