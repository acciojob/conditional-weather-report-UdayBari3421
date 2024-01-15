import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import Box from "./Box";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: "",
  });

  useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <Box weatherData={weatherData} />
    </div>
  );
};

export default App;
