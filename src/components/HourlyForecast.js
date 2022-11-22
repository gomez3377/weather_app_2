import React from 'react'
import {FaMoon} from 'react-icons/fa'

const HourlyForecast = () => {
  return (
    <div className='single-hour-container'>
        <h4>Now</h4>
        <FaMoon />
        <h4>19&deg;</h4> 
    </div>
  )
}

export default HourlyForecast