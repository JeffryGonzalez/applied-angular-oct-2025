import { signalStore, withState } from '@ngrx/signals';
import { on, withReducer } from '@ngrx/signals/events';
import { counterPrefsEvents } from './actions';

export const PrizeStore = signalStore(
  withState({
    winner: false,
  }),
  withReducer(
    on(counterPrefsEvents.setCountBy, (a) => ({ winner: a.payload === 5 })),
  ),
);
