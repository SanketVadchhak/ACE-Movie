import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <div className=''>
            <img src="/search.svg" alt="search" />
            <input type="text" placeholder='Search through all movies' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    </div>
  )
}

export default Search