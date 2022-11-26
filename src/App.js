import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import DayForecasts from "./components/DayForecasts";
import HourlyForecasts from "./components/HourlyForecasts";
import SearchBar from "./components/SearchBar";

function App() {

// const [data, setData] = React.useState([])
const [city, setCity] = React.useState("")
// React.useEffect(() => {
//   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f5145bb2c625469841af7339a460cab`
//   fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
// },[])
const changeCity = (cityResult) => {
  setCity(cityResult)
}



  return (
    <div className="App">
      <h1>Weather App</h1>
      <main className="app-container">
     <SearchBar city={city} getResults={changeCity} />
     {city && <div className="weatherResults">
    <CurrentWeather cityName={city} />
     <HourlyForecasts />
    <DayForecasts />

     </div>}

      </main>
    </div>
  );
}

export default App;
