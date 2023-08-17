import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { getRandomNumber } from '../utils/functions';
import { PokeCard } from '../interfaces/pokeCard.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  pokeUrl = environment.pokeApi;
  itemUrl = environment.itemApi;
  ids: number[] = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
  pokemonArr: PokeCard[] = [];

  constructor(private http: HttpClient) {}

  getPokeball() {
    return this.http.get(`${this.itemUrl}/4`).pipe(
      map((response: any) => {
        return {
          name: response.name,
          imgUrl: response.sprites.default,
        };
      })
    );
  }

  getPokemons() {

    this.ids.forEach((id) => {
      this.http.get(`${this.pokeUrl}/${id}`).pipe(
        map((response: any) => {
          console.log("hola",response);
          let pokemon = {
            id: id,
            name: response.species.name,
            imgUrl: response.sprites.front_default,
          };
          this.pokemonArr.push(pokemon);
        })
      );
    });
    console.log(this.pokemonArr);

    return this.pokemonArr;
  }
}
