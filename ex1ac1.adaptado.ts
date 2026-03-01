import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; //
import { FormsModule } from '@angular/forms'; //



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, //era false
  imports: [IonicModule, CommonModule, FormsModule], //
})
export class HomePage {
  inputname: string = '';
  medida: string = '';
  titulo: string = '';
  valorAConverter: string = '';
  conversao: string = '';
  nome: string = '';

  constructor() {}

    converter() {

      const valor = document.getElementById('opcao') as HTMLIonSegmentElement;

      if(valor.value === 'celc'){
        this.inputname = 'em fahrenheit';
        this.nome = 'celcius';
        this.medida = 'ºC';
        this.conversao = ((parseFloat(this.valorAConverter) - 32) * 5 / 9).toFixed(1);

      }else{
        this.inputname = 'em celcius';
        this.nome = 'fahrenheit';
        this.medida = 'ºF';
        this.conversao = ((9 * parseFloat(this.valorAConverter) / 5)+32).toFixed(1);
    }

      }
    
    }
