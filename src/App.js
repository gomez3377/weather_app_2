import CurrentWeather from "./components/CurrentWeather";
import DayForecasts from "./components/DayForecasts";
import HourlyForecasts from "./components/HourlyForecasts";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <main className="app-container">
     <SearchBar />
     <CurrentWeather />
     <HourlyForecasts />
     <DayForecasts />

      </main>
    </div>
  );
}

export default App;
