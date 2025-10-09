import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
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

      if (current === 0) return '';
      if (current % 3 === 0 && current % 5 === 0)
        return `<div role="alert" class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>FizzBuzz</span>
              </div>`;

      if (current % 3 === 0)
        return `<div role="alert" class="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Fizz</span>
              </div>`;
      if (current % 5 === 0)
        return `<div role="alert" class="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Buzz</span>
            </div>`;
      return '';
    }),
  })),
);
