import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; //
import { FormsModule } from '@angular/forms'; //

//todos os com comentarios foram adicionados para rodar no meu proprio computado em casa
//Lembrete de tira-los na escola para rodar normal

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, //era false
  imports: [IonicModule, CommonModule, FormsModule], //
})
export class HomePage {
  medida: string = '';
  titulo: string = '';
  valorAConverter: string = '';
  conversao: string = '';
  nome: string = '';

  constructor() {}

    converter() {

      const valor = document.getElementById('opcao') as HTMLIonSegmentElement;

      if(valor.value === 'celc'){
        this.nome = 'celcius';
        this.medida = 'ºC'
        this.conversao = ((parseFloat(this.valorAConverter) - 32) * 5 / 9).toFixed(0);

      }else{
        this.nome = 'fahrenheit';
        this.medida = 'ºF'
        this.conversao = ((9 * parseFloat(this.valorAConverter) / 5) + 32).toFixed(0);
    }

      }
    
    }
