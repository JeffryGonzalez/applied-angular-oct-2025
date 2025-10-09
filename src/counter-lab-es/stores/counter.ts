import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withProps,
  withState,
} from '@ngrx/signals';
import { on, withReducer } from '@ngrx/signals/events';
import { counterPrefsEvents, counterUiEvents } from './actions';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

const CountByValues = [1, 3, 5] as const;
export type CountByValue = (typeof CountByValues)[number];

type CounterState = {
  countBy: CountByValue;
  current: number;
};

export const CounterStore = signalStore(
  withDevtools('events-store'),
  withState<CounterState>({ countBy: 1, current: 0 }),

  withProps(() => ({
    countByValues: CountByValues,
  })),
  withReducer(
    on(counterUiEvents.incremented, (_, s) => ({
      current: s.current + s.countBy,
    })),
    on(counterUiEvents.decremented, (_, s) => ({
      current: s.current - s.countBy,
    })),
    on(counterPrefsEvents.setCountBy, (a) => ({ countBy: a.payload })),
  ),
  withComputed((state) => ({
    decrementShouldBeDisabled: computed(
      () => state.current() - state.countBy() < 0,
    ),
    fizzBuzz: computed(() => {
      const current = state.current();
      if (current === 0) {
        return '';
      }
      if (isFizzBuzz(current)) {
        return 'FizzBuzz';
      }
      if (isBuzz(current)) {
        return 'Buzz';
      }
      if (isFizz(current)) {
        return 'Fizz';
      }
      return '';
    }),
  })),
  withHooks({
    onInit(store) {
      const savedJson = localStorage.getItem('counter');
      if (savedJson !== null) {
        const state = JSON.parse(savedJson) as unknown as CounterState;
        patchState(store, state);
      }
      watchState(store, (state) => {
        localStorage.setItem('counter', JSON.stringify(state));
      });
    },
  }),
);

function isFizz(n: number) {
  return n % 3 === 0;
}
function isBuzz(n: number) {
  return n % 5 === 0;
}
function isFizzBuzz(n: number) {
  return isFizz(n) && isBuzz(n);
}
