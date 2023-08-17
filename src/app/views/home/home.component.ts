import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { HomePokemon } from 'src/app/interfaces/homePokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemon!: HomePokemon;
  pokemonSub!: Subscription;

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
