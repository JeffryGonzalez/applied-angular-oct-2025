import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

const CountByValues = [1, 3, 5] as const;
export type CountByValue = (typeof CountByValues)[number];

type CounterState = {
  by: CountByValue;
  current: number;
};

export const CounterStore = signalStore(
  withState<CounterState>({
    by: 1,
    current: 0,
  }),
  withProps(() => ({
    countByValues: CountByValues,
  })),
  withMethods((state) => ({
    setBy: (by: CountByValue) => patchState(state, { by }),
    increment: () =>
      patchState(state, { current: state.current() + state.by() }),
    decrement: () =>
      patchState(state, { current: state.current() - state.by() }),
  })),
  withComputed((state) => ({
    decrementShouldBeDisabled: computed(() => state.current() - state.by() < 0),
    fizzBuzz: computed(() => {
      const current = state.current();

      if (current === 0) {
        return '';
      }
      // DRY - don't repeat yourself - RUG - repeat until good.
      if (current % 3 === 0 && current % 5 === 0) {
        return 'FizzBuzz';
      }
      if (current % 3 === 0) {
        return 'Fizz';
      }
      if (current % 5 === 0) {
        return 'Buzz';
      }
      return '';
    }),
  })),
  withHooks({
    onInit(store) {
      // look to see if we've stored this before - if we have, use that.
      const savedCounterJson = localStorage.getItem('counter');
      if (savedCounterJson !== null) {
        // turn it into CounterState.
        const savedState = JSON.parse(savedCounterJson) as CounterState;
        patchState(store, savedState);
        // Patch the State
      }
      // also, every time the state changes, update the storage.
      watchState(store, (state) => {
        localStorage.setItem('counter', JSON.stringify(state));
      });
    },
  }),
);
