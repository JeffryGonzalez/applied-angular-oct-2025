import { type } from '@ngrx/signals';
import { eventGroup } from '@ngrx/signals/events';
import { CountByValue } from './counter';

export const counterUiEvents = eventGroup({
  source: 'Counter UI Events',
  events: {
    // 👇 Defining an event creator without a payload.
    incremented: type<void>(),
    decremented: type<void>(),
  },
});

export const counterPrefsEvents = eventGroup({
  source: 'Counter Prefs Events',
  events: {
    setCountBy: type<CountByValue>(),
  },
});
