import React from 'react'
import { FaSun } from 'react-icons/fa'

const DayForecast = () => {
  return (
    
    <div className='single-day-forcast'>
    <h4>Today</h4>
    <FaSun />
    <h4>H:33&deg;</h4>
    <h4>L:6&deg;</h4>
  </div>
  )
}

export default DayForecast