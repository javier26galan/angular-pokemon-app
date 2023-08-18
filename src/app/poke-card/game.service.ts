import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { getRandomNumber } from '../utils/functions';
import { PokeCard } from '../interfaces/pokeCard.interface';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  pokeUrl = environment.pokeApi;
  itemUrl = environment.itemApi;
  idsArr: number[] = [getRandomNumber(), getRandomNumber(), getRandomNumber()];

  constructor(private http: HttpClient) {}

  getPokeball() {
    return this.http.get(`${this.itemUrl}/4`).pipe(
      map((response: any) => {
        return {
          name: response.name,
          imgUrl: response.sprites.default,
          closed: true,
        } as Item;
      })
    );
  }

  getPokemon(id: number) {
    return this.http.get(`${this.pokeUrl}/${id}`).pipe(
      map((response: any) => {
        return {
          id: id,
          name: response.species.name,
          imgUrl: response.sprites.front_default,
        } as PokeCard;
      })
    );
  }
}
