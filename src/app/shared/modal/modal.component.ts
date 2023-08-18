import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokeCard } from 'src/app/interfaces/pokeCard.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() pokemon!: PokeCard;
  @Input() message!: string;
  @Input() route!: string;
  @Output() playAgainClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router:Router){}

  playAgain(): void {
    // Navega a la ruta "/play-again"
    this.router.navigate([`/${this.route}`]);
    this.playAgainClicked.emit(true);
  }

  goHome(): void {
    // Navega a la ruta "/"
    this.router.navigate(['/']);
  }
}
