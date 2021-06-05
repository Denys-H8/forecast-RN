import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { setLoading } from './citySelection/actions';

describe('Store', () => {
  it('should handle cityReducer', () => {
    const store = createStore(rootReducer, {});
    const value = false;

    store.dispatch(setLoading(value));

    const actual = store.getState().cityReducer.query;
    const expected = '';

    expect(actual).toEqual(expected);
  });
});
