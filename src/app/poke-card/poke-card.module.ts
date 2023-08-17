import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardGameComponent } from './poke-card-game.component';
import { PokeCardRoutingModule } from './poke-card-routing.module';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PokeCardGameComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PokeCardRoutingModule,
    HttpClientModule
  ]
})
export class PokeCardModule { }
