import {
  trigger,
  transition,
  style,
  animate,
  group,
  query
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 999
      })
    ], { optional: true }),

    group([
      query(':leave', [
        animate('0.6s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.6s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true })
    ])
  ])
]);
