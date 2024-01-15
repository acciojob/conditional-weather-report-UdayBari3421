/*
Create a weather app that displays the current temperature and weather conditions for a given location. 
If the temperature is above a certain threshold, display it in red, otherwise display it in blue.
Threshold is 20 degrees
Use weather input as { temperature: 25, conditions: "Sunny" }
*/
import React, { useState } from "react";

const Box = ({ weatherData }) => {
  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={{ color: weatherData.temperature > 20 ? "red" : "blue" }}>
          {weatherData.temperature}
        </span>
      </p>
      <p>Conditions: {weatherData.conditions}</p>
    </div>
  );
};

export default Box;
