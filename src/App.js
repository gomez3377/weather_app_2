import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import DayForecasts from "./components/DayForecasts";
import HourlyForecasts from "./components/HourlyForecasts";
import SearchBar from "./components/SearchBar";

function App() {

const [data, setData] = React.useState([])
// const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid="
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2f5145bb2c625469841af7339a460cab`
const [city, setCity] = React.useState("")
// React.useEffect(() => {
//   fetch()
//   .then(res => res.json())
//   .then(data => setWeatherData(data))
// })
const changeCity = (cityResult) => {
  setCity(cityResult)
}
console.log(city)


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
