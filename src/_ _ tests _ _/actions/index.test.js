import * as actions from '../../actions';
import * as c from '../../actions/ActionTypes';

describe('NYT API actions', () => {
  it('getTopStoriesSuccess should create a GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = [{ title: 'Article 1' }, { title: 'Article 2' }];
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    });
  });

  it('getTopStoriesFailure should create a GET_TOP_STORIES_FAILURE action', () => {
    const error = 'Error message';
    expect(actions.getTopStoriesFailure(error)).toEqual({
      type: c.GET_TOP_STORIES_FAILURE,
      error
    });
  });
});