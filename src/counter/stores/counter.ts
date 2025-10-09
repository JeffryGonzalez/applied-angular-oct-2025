// import { signalStore } from '@ngrx/signals';
import { SignalStore } from '@angular/core/rxjs-interop';

ex
export class CounterSignalStore extends SignalStore<{ count: number }> {
  constructor() {
    super({
        count: 0
    });
  }
  get count(){
    return this.state.count;
  }
  incrementBy(value: number){
   this.update((state) => ({
      ...state,
      count: state.count + value,
    }));
  }
