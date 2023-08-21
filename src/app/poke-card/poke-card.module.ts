import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardGameComponent } from './poke-card-game.component';
import { PokeCardRoutingModule } from './poke-card-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [PokeCardGameComponent],
  imports: [
    CommonModule,
    PokeCardRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class PokeCardModule {}
