/* IMPORTACIONES DE ANGULAR */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* IMPORTACIONES DE TERCEROS */
/* IMPORTACIONES DE AUTORÍA PROPIA */
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component'; //Aquí
import { DbzService } from './services/dbz.service';


@NgModule({

  declarations: [

    MainPageComponent,
     PersonajesComponent,
     AgregarComponent

  ],

  exports: [

    MainPageComponent//Aquí --> Carpeta con los componentes 

  ],

  imports: [ /* Si es un módulo va aquí */

    CommonModule,
    FormsModule


  ],

  providers: [

    DbzService

  ]

})

export class DbzModule { }
