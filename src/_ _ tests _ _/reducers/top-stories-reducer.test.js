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

  test('Should update state on GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = [{ title: 'Article 1' }, { title: 'Article 2' }];
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    };
    expect(topStoriesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoaded: true,
      topStories: topStories
    });
  });

  test('Should update state on GET_TOP_STORIES_FAILURE action', () => {
    const error = 'Error message';
    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error
    };
    expect(topStoriesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoaded: true,
      error: error
    });
  });
});
2. Reducer Function
File: src/reducers/top-stories-reducer.js

This file will define your reducer:

javascript
Copy code
import * as c from '../actions/ActionTypes';

const topStoriesReducer = (state = { isLoaded: false, topStories: [], error: null }, action) => {
  switch (action.type) {
    case c.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories
      };
    case c.GET_TOP_STORIES_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default topStoriesReducer;
  