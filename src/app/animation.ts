import { trigger, animateChild, animate, group, transition, style, query } from '@angular/animations';

export const switchPage =
  trigger('routeAnimation', [
    transition('login => welcome', [
      query(':leave', [
        style({
          left: '100%'
        })
      ]),
      query(':enter', [
        style({
          left: '-100%'
        })
      ])
    ])
  ]);
