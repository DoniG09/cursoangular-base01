import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  
  heroes: string[] = ["Spiderman", "Ironman", "Capitán América", "Thor", "Blackwidow"]
  heroeBorrado: string | undefined = "";

  borrarHeroe(){

    console.log("borrando...");

    /* const heroeBorrado = this.heroes.shift(); */

    /* console.log(heroeBorrado); */

    this.heroeBorrado = this.heroes.shift() || "";

    

  }

}
