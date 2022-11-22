import React from 'react'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <h2>Enter a City</h2>
        <form className='city-search'>
        <label htmlFor="">City Name</label>
        <input type="text" required />
        <input type="submit" value="Search City" />
        </form>

    </div>
  )
}

export default SearchBar