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
import { withFizzBuzz } from './fizz-buzz-feature';

const StepValues = [1, 2, 4] as const;
export type StepValue = (typeof StepValues)[number];

type CounterState = {
  step: StepValue;
  current: number;
};

export const CounterStore = signalStore(
  withDevtools('unique-counter'),
  withState<CounterState>({
    step: 1,
    current: 0,
  }),
  withFizzBuzz(), // Add the FizzBuzz feature.
  withProps(() => ({
    stepValues: StepValues,
  })),
  withStorageSync('unique-counter-storage'),
  withMethods((state) => ({
    updateBy: (step: StepValue) => patchState(state, { step }),
    increase: () =>
      patchState(state, { current: state.current() + state.step() }),
    decrease: () =>
      patchState(state, { current: state.current() - state.step() }),
  })),
  withComputed((state) => ({
    canDecrement: computed(() => state.current() - state.step() < 0),
  })),
);
