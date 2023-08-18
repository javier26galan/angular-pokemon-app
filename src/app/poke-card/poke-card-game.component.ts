import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Item } from '../interfaces/item.interface';
import { Subscription } from 'rxjs';
import { PokeCard } from '../interfaces/pokeCard.interface';
import { getRandomNumber, shuffleArray } from '../utils/functions';

@Component({
  selector: 'app-poke-card-game',
  templateUrl: './poke-card-game.component.html',
  styleUrls: ['./poke-card-game.component.scss'],
})
export class PokeCardGameComponent implements OnInit, OnDestroy {
  pokeball!: Item;
  randomNumbers: number[] = [getRandomNumber(), getRandomNumber()];
  pokemonArr: PokeCard[] = [];
  pokeSubs: Subscription[] = [];
  selectedCards: number[] = [];
  matchedPairs: number[] = [];
  win: boolean = false;

  constructor(public gameService: GameService) {}

  handleClick(event: any, index: number) {
    if (!this.matchedPairs.includes(index) && this.selectedCards.length < 2) {
      // Permitir seleccionar si no está en los pares coincidentes y hay menos de 2 seleccionadas
      if (!this.selectedCards.includes(index)) {
        this.selectedCards.push(index);
      }

      if (this.selectedCards.length === 2) {
        // Comparar los pokemons seleccionados
        const [index1, index2] = this.selectedCards;
        const pokemon1 = this.pokemonArr[index1];
        const pokemon2 = this.pokemonArr[index2];

        if (pokemon1.id === pokemon2.id) {
          // Son el mismo pokemon, agrega al par de coincidencias y limpia la selección
          this.matchedPairs.push(index1, index2);
          this.selectedCards = [];
        } else {
          // No son el mismo pokemon, oculta las tarjetas después de un tiempo
          setTimeout(() => {
            this.selectedCards = [];
          }, 1000); //  espera 1 segundo (1000ms) antes de ocultar las tarjetas
        }
      }
    }
    if (this.matchedPairs.length === this.pokemonArr.length) {
      // Se han encontrado todos los pares de pokémons, mostrar el modal
      this.showModal();
    }
  }
  showModal() {
    // hacemos aparecer el modal de todos encontrados
    console.log('Mostrar modal');
    this.win = true
  }

  ngOnInit(): void {
    const ballSubs = this.gameService.getPokeball().subscribe((data: Item) => {
      this.pokeball = data;
    });
    this.pokeSubs.push(ballSubs);
    this.randomNumbers.forEach((id, index, array) => {
      const subscription = this.gameService
        .getPokemon(id)
        .subscribe((pokemon: PokeCard) => {
          this.pokemonArr.push(pokemon);
          this.pokemonArr.push(pokemon);
          if (index === array.length - 1) {
            this.pokemonArr = shuffleArray(this.pokemonArr);
          }
        });
      this.pokeSubs.push(subscription);
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.pokeSubs.forEach((subscription) => subscription.unsubscribe());
    this.pokemonArr = [];
  }
}
