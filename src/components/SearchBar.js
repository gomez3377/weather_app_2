import React from 'react'


const SearchBar = ({getResults}) => {
 const [cityInput, setCityInput] = React.useState("")

const onSubmit = (e) => {
  e.preventDefault()
  getResults(cityInput)
  setCityInput('')
}

  return (
    <div className='search-bar'>
        <h2>Enter a City</h2>
        <form className='city-search' onSubmit={onSubmit}>
        <label htmlFor="">City Name</label>
        <input className='city-input' 
        type="text" 
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        required />
        <input className='submit-button' type="submit" value="Search" />
        </form>

    </div>
  )
}

export default SearchBar