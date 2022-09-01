import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* import { ContadorComponent } from './contador/contador/contador.component'; */
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module'; //Aquí
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';//Aquí

@NgModule({

  declarations: [

    AppComponent,
    /* ContadorComponent */

  ],

  imports: [

    BrowserModule,
    HeroesModule,
    ContadorModule, //Aquí
    DbzModule//Aquí --> Carpeta Base

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
