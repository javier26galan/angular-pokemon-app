import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Item } from '../interfaces/item.interface';
import { Observable } from 'rxjs';
import { PokeCard } from '../interfaces/pokeCard.interface';

@Component({
  selector: 'app-poke-card-game',
  templateUrl: './poke-card-game.component.html',
  styleUrls: ['./poke-card-game.component.scss'],
})
export class PokeCardGameComponent implements OnInit {
  pokeball!: Item;
  gameArr!:PokeCard[];

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getPokeball().subscribe((data:Item) => this.pokeball = data);
    this.gameArr = this.gameService.getPokemons();
    console.log(this.gameArr);
  }
}
