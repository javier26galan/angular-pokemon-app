import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HomePokemon } from './interfaces/homePokemon.interface';
import { getRandomNumber } from './utils/functions';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private url = environment.pokeApi;
  randomNum = getRandomNumber();
  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get(`${this.url}/${this.randomNum}`).pipe(
      map((response: any) => {
        return {
          name: response.species.name,
          imgUrl: response.sprites.front_default,
        } as HomePokemon;
      })
    );
  }
}
