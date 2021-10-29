import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Thor', 'Venom','Magneto'];
  heroeBorrado: string = '';

  borrarPrimerHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Se eliminara ' + this.heroeBorrado);
  }

}
