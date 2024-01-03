import React, { useState, useEffect } from 'react';

function TopStories() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          setTopStories(jsonifiedResponse.results);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {topStories.map((story, index) => (
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