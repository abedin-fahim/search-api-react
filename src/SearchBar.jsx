import React from 'react';
import { BsSearch } from 'react-icons/bs';
const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults(posts);
    }
    const resultArray = posts.filter(
      (posts) =>
        posts.title.includes(e.target.value) ||
        posts.body.includes(e.target.value)
    );

    setSearchResults(resultArray);
  };

  return (
    <header>
      <form
        className='search'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='search__input'
          id='search'
          onChange={handleSearchChange}
        />
        <button className='search__button'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
