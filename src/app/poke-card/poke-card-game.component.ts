import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Item } from '../interfaces/item.interface';
import { Subscription } from 'rxjs';
import { PokeCard } from '../interfaces/pokeCard.interface';
import { getRandomNumber, shuffleArray } from '../utils/functions';
import { expand } from '../animations/expand.animation';
import { appear } from '../animations/appear.animation';
import { pokeball } from '../animations/pokeball.animation';

@Component({
  selector: 'app-poke-card-game',
  templateUrl: './poke-card-game.component.html',
  styleUrls: ['./poke-card-game.component.scss'],
  animations: [expand, appear, pokeball],
})
export class PokeCardGameComponent implements OnInit, OnDestroy {
  pokeball!: Item; //pokebal item
  pokeballArr: Item[] = []; //
  randomNumbers: number[] = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];
  pokemonArr: PokeCard[] = []; //arr que contendrá los objetos pokemon
  pokeSubs: Subscription[] = []; //aquí guardo las subscriciones para luego dessubscribirme
  selectedCards: number[] = []; //array que guarda la seleccion
  selectedPokeballs: number[] = []; // array de la pokebals seleccionadas
  matchedPairs: number[] = []; //array que guarda las selecciones exitosas
  win: boolean = false; // para mostrar el modal
  winMessage: string = 'congrats you for the victory'; //mensagge de victoria del modal
  routeGame: string = 'card-game'; //ruta de el juego
  startGame: boolean = false; // para manejar las animaciones en el inicio del juego

  constructor(public gameService: GameService) {}

  setGame() {
    //iniciador de el jeugo
    this.randomNumbers.forEach((id, index, array) => {
      //por cada randomNumber hacemos una llamada a la api para conseguir el pokemon
      const subscription = this.gameService
        .getPokemon(id)
        .subscribe((pokemon: PokeCard) => {
          //en esta subscricion enpujamos 2 veces el pokemon encontrado
          this.pokemonArr.push(pokemon);
          this.pokemonArr.push(pokemon);
          this.pokemonArr = shuffleArray(this.pokemonArr); //barajar array de pokemon
        });
      this.pokeSubs.push(subscription);
      this.startGame = true;
    });
  }

  onPlayAgainClicked(playAgain: boolean): void {
    //para resetear el juego
    if (playAgain) {
      this.win = false;
      this.pokemonArr = [];
      this.matchedPairs = [];
      this.startGame = false;
      this.setGame();
    }
  }

  togglePokeball(pokeball: Item): void {
    pokeball.state = pokeball.state === 'closed' ? 'open' : 'closed';
    console.log(this.pokeballArr);
  }

  handleClick(event: any, index: number) {
    if (!this.matchedPairs.includes(index) && this.selectedCards.length < 2) {
      // Permitir seleccionar si no está en los pares coincidentes y hay menos de 2 seleccionadas
      if (!this.selectedCards.includes(index)) {
        this.selectedCards.push(index);
        this.selectedPokeballs.push(index);
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
            this.selectedPokeballs.forEach((id)=>{
              console.log(id);
              this.pokeballArr[id].state = 'closed'
            });
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
    this.win = true;
  }

  ngOnInit(): void {
    const ballSubs = this.gameService.getPokeball().subscribe((data: Item) => {
      this.randomNumbers.forEach(() => {
        this.pokeballArr.push({ ...data, state: 'closed' });
        this.pokeballArr.push({ ...data, state: 'closed' });
      });
      this.setGame();
    });
    this.pokeSubs.push(ballSubs);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.pokeSubs.forEach((subscription) => subscription.unsubscribe());
    this.pokemonArr = [];
  }
}
