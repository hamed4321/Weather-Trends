import axios from 'axios'
const API_KEY = '9b88933608030390ee663ec2cd3cfc68';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url);


  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
