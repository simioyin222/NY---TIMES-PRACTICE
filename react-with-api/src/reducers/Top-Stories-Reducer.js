import * as c from '../actions/ActionTypes';

const topStoriesReducer = (state = { isLoaded: false, topStories: [], error: null }, action) => {
  switch (action.type) {
    case c.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories
      };
    }}; 