import React from 'react'
import logo from '/search.svg';

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <div className=''>
            <img src={logo} alt="search" />
            <input type="text" placeholder='Search through all movies' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    </div>
  )
}

export default Search
