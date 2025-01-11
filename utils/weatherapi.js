import axios from 'axios';

const API_KEY = "9d3d8b0dab2ec7d3824a18290553a28f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeatherByLocation = async (lat, lon) => {
  const response = await axios.get(`${BASE_URL}onecall`, {
    params: {
      lat,
      lon,
      exclude: "minutely,hourly",
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};

export const fetchWeatherByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};
