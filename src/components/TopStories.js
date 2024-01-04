import React, { useEffect, useReducer } from 'react';
import topStoriesReducer from '../reducers/top-stories-reducer';
import { getTopStoriesSuccess, getTopStoriesFailure } from '../actions';


const initialState = {
  isLoaded: false,
  topStories: [],
  error: null
};

function TopStories() {
  const [state, dispatch] = useReducer(topStoriesReducer, initialState);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getTopStoriesSuccess(jsonifiedResponse.results));
        },
        (error) => {
          dispatch(getTopStoriesFailure(error));
        }
      );
  }, []);

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  } else if (!state.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {state.topStories.map((story, index) => (
          <li key={index}>
            <h3>{story.title}</h3>
            <p>{story.abstract}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default TopStories;