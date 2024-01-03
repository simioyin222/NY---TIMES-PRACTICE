import topStoriesReducer from '../../reducers/top-stories-reducer';
import * as c from '../../actions/ActionTypes';

describe('topStoriesReducer', () => {
  let action;
  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
  };

  test('Should return default state if no action type is recognized', () => {
    expect(topStoriesReducer(initialState, { type: null })).toEqual(initialState);
  });
});