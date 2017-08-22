import { fromJS } from 'immutable';
import reducer from './../reducer';
import {INCREMENT, DECREMENT} from './../../constans/constans';

describe('Counter reducer', () => {

  it('start the reducer', () => {
    expect(reducer(undefined, {})).toEqual(fromJS({count: 0}));
  });

  it('it should increment the count property.', () => {
    const initialState = fromJS({count: 0});
    const expectedState = fromJS({count: 1});

    expect(reducer(initialState, {type: INCREMENT})).toEqual(expectedState);
  });

  it('it should increment the count property another one.', () => {
    const state = fromJS({count: 1});
    const expectedState = fromJS({count: 2});

    expect(reducer(state, {type: INCREMENT})).toEqual(expectedState);
  });

  it('it should decrement the count property.', () => {
    const state = fromJS({count: 2});
    const expectedState = fromJS({count: 1});

    expect(reducer(state, {type: DECREMENT})).toEqual(expectedState);
  });

  it('it should decrement the count property another one.', () => {
    const state = fromJS({count: 1});
    const expectedState = fromJS({count: 0});

    expect(reducer(state, {type: DECREMENT})).toEqual(expectedState);
  });
});
