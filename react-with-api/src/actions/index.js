import * as c from './ActionTypes';

export const getTopStoriesSuccess = topStories => {
  return {
    type: c.GET_TOP_STORIES_SUCCESS,
    topStories
  };
};

export const getTopStoriesFailure = error => {
  return {
    type: c.GET_TOP_STORIES_FAILURE,
    error
  };
};