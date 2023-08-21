import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const appear = trigger('appear', [
  state('*', style({ transform: 'translateX(-1000px)', opacity: 0 })), // Estado inicial
  state('appear', style({ transform: 'translateX(0)', opacity: 1 })), // Estado final
  transition('* => appear', [
    animate('1000ms'), // Duración y estilo final
  ]),
]);
