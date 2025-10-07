import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

const ParValues = [3, 4, 5, 6] as const;
type GolfPar = (typeof ParValues)[number];
type GolfState = {
  strokeCount: number;
  par: GolfPar | null;
};

export const GolfStore = signalStore(
  withProps(() => ({
    golfPar: ParValues,
  })),
  withState<GolfState>({
    strokeCount: 0,
    par: null,
  }),
  withMethods((state) => ({
    setPar: (par: GolfPar) => patchState(state, { par }),
    takeASwing: () =>
      patchState(state, { strokeCount: state.strokeCount() + 1 }),
  })),
  withComputed((store) => {
    return {
      getLevel: computed(() =>
        calculateLevel(store.strokeCount(), store.par()),
      ),
    };
  }),
  withHooks({
    onInit: () => {
      console.log('The Golf Store Was Created!');
    },
    onDestroy: () => {
      console.log('The Golf Store was destroyed!');
    },
  }),
);

function calculateLevel(strokes: number, par: GolfPar | null) {
  if (par === null || strokes === 0) {
    return '';
  }

  const diff = strokes - par;

  if (diff === 0) {
    return 'Par';
  }
  if (diff === -1) {
    return 'Birdie';
  }
  if (diff === -2) {
    return 'Eagle';
  }
  if (diff == 1) {
    return 'Bogey';
  }
  if (diff >= 3) {
    return 'Ouch';
  }
  return '';
}
