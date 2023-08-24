import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ListPost from './ListPost';
import { getPosts } from './api/axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        setSearchResults(json);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <>
      <SearchBar
        posts={posts}
        setSearchResults={setSearchResults}
      />
      <ListPost searchResults={searchResults} />
    </>
  );
}

export default App;
