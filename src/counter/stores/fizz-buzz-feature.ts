import {
  signalStoreFeature,
  type,
  withComputed,
  withState,
} from '@ngrx/signals';
import { fizzBuzzComputed } from '../utils/math';

/**
 * Adds FizzBuzz functionality to any store with a `current` state property.
 * This feature computes whether the `current` value is "Fizz", "Buzz", "FizzBuzz", or none.
 */
export function withFizzBuzz() {
  return signalStoreFeature(
    {
      // This ensures the store has a `current` state property.
      state: type<{ current: number }>(),
    },
    // Initialize the state with a default value for `current`.
    withState({ current: 0 }),
    // Add computed properties to calculate FizzBuzz logic.
    withComputed((store) => ({
      fizzBuzz: () => fizzBuzzComputed(store.current())(),
    })),
  );
}
