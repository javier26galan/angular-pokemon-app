import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { HomePokemon } from 'src/app/interfaces/homePokemon.interface';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  pokemon!: HomePokemon;
  pokemonSub!:Subscription;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.pokemonSub = this.appService.getPokemon().subscribe((data) => {
      this.pokemon = data;
    });
  }
  ngOnDestroy(): void {
    this.pokemonSub.unsubscribe();
  }
}
