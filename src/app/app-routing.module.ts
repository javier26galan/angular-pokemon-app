import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'expand' } },
  {
    path: 'card-game',
    loadChildren: () =>
      import('./poke-card/poke-card.module').then((m) => m.PokeCardModule),
    data: { animation: 'expand' },
  },
  { path: '**', component: NotFoundComponent, data: { animation: 'expand' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
