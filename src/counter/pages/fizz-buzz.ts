import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      @switch (fizzBuzz()) {
        @case ('Fizz') {
          <div role="alert" class="alert alert-info alert-dash">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info h-6 w-6 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{{ fizzBuzz() }}</span>
          </div>
        }
        @case ('Buzz') {
          <div role="alert" class="alert alert-warning alert-dash">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info h-6 w-6 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{{ fizzBuzz() }}</span>
          </div>
        }
        @case ('FizzBuzz') {
          <div role="alert" class="alert alert-success alert-dash">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info h-6 w-6 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{{ fizzBuzz() }}</span>
          </div>
        }
      }
    </div>
  `,
  styles: ``,
})
export class Fizzbuzz {
  fizzBuzz = input.required<'Fizz' | 'Buzz' | 'FizzBuzz' | ''>();
}
