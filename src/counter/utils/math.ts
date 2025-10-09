/**
 * Computes whether a number is "Fizz", "Buzz", "FizzBuzz", or none.
 * - "Fizz" if divisible by 3
 * - "Buzz" if divisible by 5
 * - "FizzBuzz" if divisible by both 3 and 5
 * - Otherwise, returns an empty string
 */
export function fizzBuzzComputed(value: number): () => string {
  return () => {
    if (value % 15 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    }
    return '';
  };
}
