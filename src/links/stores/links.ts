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
import { ApiLinkItem, SortingOptions } from '../types';
import { httpResource } from '@angular/common/http';
import { computed } from '@angular/core';

type LinksState = {
  sortingBy: SortingOptions;
};
export const LinksStore = signalStore(
  withState<LinksState>({
    sortingBy: 'NewestFirst',
  }),

  withProps(() => ({
    linksResource: httpResource<ApiLinkItem[]>(() => ({
      url: 'https://api.some-fake-server.com/links',
    })),
  })),
  withComputed((store) => {
    return {
      getNumberOfLinks: computed(
        () => store.linksResource.value()?.length || 0,
      ),
    };
  }),
  withMethods((state) => {
    return {
      changeSortOrder: (sortingBy: SortingOptions) =>
        patchState(state, { sortingBy }),
    };
  }),
  withHooks({
    onInit(store) {
      setInterval(() => store.linksResource.reload(), 5000); // polling
      const savedSortOption = localStorage.getItem('sort-order');
      if (savedSortOption !== null) {
        store.changeSortOrder(savedSortOption as SortingOptions);
      }
      watchState(store, ({ sortingBy }) => {
        localStorage.setItem('sort-order', sortingBy);
      });
    },
  }),
);
