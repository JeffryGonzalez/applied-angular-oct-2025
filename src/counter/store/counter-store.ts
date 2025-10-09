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
  currentCount: number;
  countBy: 1 | 3 | 5;
};

export const CounterStore = signalStore(
  withState<CounterState>({
    currentCount: 0,
    countBy: 1,
  }),
  withProps(() => ({
    countByValues: CountByValues,
  })),
  withMethods((state) => ({
    add: () =>
      patchState(state, {
        currentCount: state.currentCount() + state.countBy(),
      }),
    subtract: () =>
      patchState(state, {
        currentCount:
          state.currentCount() - state.countBy() < 0
            ? 0
            : state.currentCount() - state.countBy(),
      }),
    setCountBy: (countBy: CountByValue) => patchState(state, { countBy }),
  })),
  withComputed((state) => ({
    getCurrentCount: computed(() => state.currentCount()),
    fizzBuzz: computed(() => {
      if (state.currentCount() === 0) {
        return '';
      }
      if (state.currentCount() % 5 === 0 && state.currentCount() % 3 === 0) {
        return 'FizzBuzz';
      } else if (state.currentCount() % 5 === 0) {
        return 'Buzz';
      } else if (state.currentCount() % 3 === 0) {
        return 'Fizz';
      }
      return '';
    }),
    atZero: computed(() => state.currentCount() === 0),
  })),
  withHooks({
    onInit(store) {
      const savedData = localStorage.getItem('counter');
      if (savedData !== null) {
        const state = JSON.parse(savedData) as unknown as CounterState;
        patchState(store, state);
      }
      watchState(store, (state) => {
        localStorage.setItem('counter', JSON.stringify(state));
      });
    },
  }),
);
