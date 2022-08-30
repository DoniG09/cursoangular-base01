import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({

    declarations:[

        HeroeComponent,
        ListadoComponent

    ],

    exports: [ //Que cosas quiero que sean visibles

        ListadoComponent

    ], 

    imports: [ //Van los modulos

        CommonModule

    ]

})

export class HeroesModule{



}