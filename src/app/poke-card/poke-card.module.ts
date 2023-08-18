import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardGameComponent } from './poke-card-game.component';
import { PokeCardRoutingModule } from './poke-card-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';



@NgModule({
  declarations: [
    PokeCardGameComponent,
  ],
  imports: [
    CommonModule,
    PokeCardRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class PokeCardModule { }
