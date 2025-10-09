import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

import { withStorageSync } from '@angular-architects/ngrx-toolkit';

type CounterState = {
  count: number;
  countBy: 1 | 3 | 5;
};

export const CounterStore = signalStore(
  withState<CounterState>({
    count: 0,
    countBy: 1,
  }),
  withComputed((store) => {
    return {
      atZero: computed(() => store.count() <= 0),
      fizzBuzz: computed(() => {
        const count = store.count();

        if (count === 0) {
          return '';
        }
        if (count % 3 === 0 && count % 5 === 0) {
          return 'FizzBuzz';
        }
        if (count % 3 === 0) {
          return 'Fizz';
        }
        if (count % 5 === 0) {
          return 'Buzz';
        }
        return '';
      }),
    };
  }),
  withStorageSync('countStuff'),
  withMethods((state) => {
    return {
      setCount: (count: number) => patchState(state, { count }),
      changeCountBy: (countBy: 1 | 3 | 5) => patchState(state, { countBy }),
      increment: () =>
        patchState(state, { count: state.count() + state.countBy() }),
      decrement: () =>
        patchState(state, {
          count:
            state.count() - state.countBy() > 0
              ? state.count() - state.countBy()
              : 0,
        }),
    };
  }),
);
