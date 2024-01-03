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
)};
);
  