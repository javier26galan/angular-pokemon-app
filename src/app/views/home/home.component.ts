import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { expand } from 'src/app/animations/expand.animation';
import { AppService } from 'src/app/app.service';
import { HomePokemon } from 'src/app/interfaces/homePokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [expand],
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemon!: HomePokemon;
  pokemonSub!: Subscription;

  constructor(private appService: AppService) {}
  startComp: boolean = false;

  ngOnInit(): void {
    this.pokemonSub = this.appService.getPokemon().subscribe((data) => {
      this.pokemon = data;
    });
    this.startComp = true;
  }
  ngOnDestroy(): void {
    this.pokemonSub.unsubscribe();
  }
}
