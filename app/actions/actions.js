import {INCREMENT, DECREMENT} from './../constans/constans';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
