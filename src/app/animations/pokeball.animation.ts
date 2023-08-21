import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const pokeball = trigger('pokeball', [
  state(
    'closed',
    style({
      transform: 'scale(1)',
      opacity: 1,
    })
  ),
  state(
    'open',
    style({
      transform: 'scale(0)',
      opacity: 0,
    })
  ),
  transition('closed <=> open', [animate('1s ease')]),
]);
