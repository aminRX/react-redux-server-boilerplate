import * as actions from './../../actions/actions';
import * as constans from './../../constans/constans';

describe('actions', () => {
  it('it should create a action to increase the count.', () => {
    const expectedAction = {
      type: constans.INCREMENT
    };

    expect(actions.increment()).toEqual(expectedAction);
  });

  it('It should create a action to decrement the count.', () => {
    const expectedAction = {
      type: constans.DECREMENT
    };

    expect(actions.decrement()).toEqual(expectedAction);
  });
});
