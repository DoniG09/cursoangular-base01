import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  nuevo: Personaje ={

    nombre: "Jin",
    poder: 1000000

  }

/*   get personajes(): Personaje[]{

    return this.dbzService.personajes;

  } */

/*   agregarNuevoPersonaje(argumento: Personaje) {

    this.personajes.push(argumento);

  } */
  
  constructor(/*private dbzService: DbzService */){ //Inyección de dependencias (Inyectando el serviico)


  }

}
