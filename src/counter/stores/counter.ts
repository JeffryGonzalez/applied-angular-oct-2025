import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

import {
  withStorageSync,
  withDevtools,
} from '@angular-architects/ngrx-toolkit';

const DeltaPreferences = [1, 5, 13] as const;
export type DeltaPreference = (typeof DeltaPreferences)[number];

type CounterState = {
  delta: DeltaPreference;
  counter: number;
};

export const CounterStore = signalStore(
  withDevtools('counter'),
  withState<CounterState>({
    delta: 1,
    counter: 0,
  }),
  withProps(() => ({
    deltaPreferences: DeltaPreferences,
  })),
  withStorageSync('counter-new'),
  withMethods((state) => ({
    setDelta: (delta: DeltaPreference) => patchState(state, { delta }),
    increment: () =>
      patchState(state, { counter: state.counter() + state.delta() }),
    decrement: () =>
      patchState(state, { counter: state.counter() - state.delta() }),
  })),
  withComputed((state) => ({
    disableDecrement: computed(() => state.counter() - state.delta() < 0),
    shouldFizz: computed(() => state.counter() % 3 === 0),
    shouldBuzz: computed(() => state.counter() % 5 === 0),
  })),
  withComputed((state) => ({
    description: computed(() =>
      state.shouldFizz() && state.shouldBuzz()
        ? 'FizzyBuzzy'
        : state.shouldFizz()
          ? 'Fizz'
          : state.shouldBuzz()
            ? 'Buzz'
            : state.counter().toString(),
    ),
  })),
);
