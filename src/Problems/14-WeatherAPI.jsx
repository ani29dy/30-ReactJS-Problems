import React, { useEffect, useState } from "react";
const WeatherAPI = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d5bbb0e7080739528d40990c51c9c546`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeather(data);
          });
      });
    }
  });

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          {weather}
          <p>Temperature: {weather.main.temp}</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherAPI;
