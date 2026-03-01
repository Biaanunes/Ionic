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
  nota1: string = '';
  nota2: string = '';
  nota3: string = ''; 
  nota4: string = '';
  mensagem: string = '';
  media: string = '';
  constructor() {}

    converter() {

      this.media = ((parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + 
      parseFloat(this.nota4))/4).toFixed(1)

      const calculo = (parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + 
      parseFloat(this.nota4))/4
      
      if (calculo < 3){
        this.mensagem = 'Retido.';
      }else if (calculo >= 3 && calculo < 6) {
        this.mensagem = 'Recuperação.';
      }else{
        this.mensagem = 'Aprovado.';
      }

    }

      }
    
    
