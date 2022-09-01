import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

    //Popiedades
    private _personajes: Personaje[]= [
        {
    
          nombre: "Goku",
          poder: 15000
    
        },
    
        {
    
          nombre: "Vegetta",
          poder: 8500
     
         },
    
        
    ];

    //gettters y setters
    get personajes(): Personaje[]{

        return[...this._personajes];

    }
    
    //Constructores
    constructor(){
    

    }

    agregarPersonaje(argumento:Personaje){

        this._personajes.push(argumento);

    }

}