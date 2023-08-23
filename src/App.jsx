import { useState, useEffect } from 'react';
import { getPosts } from './api/axios';
import SearchBar from './SearchBar';
import ListPost from './ListPost';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
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
