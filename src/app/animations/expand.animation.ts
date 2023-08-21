import { trigger, transition, style, animate, state } from '@angular/animations';

export const expand = trigger('expand', [
  state('*', style({ height: '0', opacity: 0 })), // Estado inicial
  state('open', style({ height: '70vh', opacity: 1 })), // Estado final
  transition('* => open', [
    animate('1000ms'), // Duración y estilo final
  ]),
]);
