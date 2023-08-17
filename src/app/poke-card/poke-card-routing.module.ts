import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokeCardGameComponent } from './poke-card-game.component';

const routes: Routes = [
  {path:'', component: PokeCardGameComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeCardRoutingModule {}
