import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface'; 
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent{

  @Input() nuevo:Personaje ={

    nombre: "",
    poder: 0

  }

  constructor(private dbzService: DbzService){



  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //emite eventos

  Agregar(){

    if(this.nuevo.nombre.trim().length === 0){

      return;

    }

    //this.onNuevoPersonaje.emit(this.nuevo); //Aquí se envía eñl evento
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo= {
      
      nombre: "",
      poder: 0

    }
    /* this.nuevo= (this.nuevoV) */

  }

  

}
