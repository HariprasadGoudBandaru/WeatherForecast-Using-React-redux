import axios from 'axios';
const WeatherForecast_API_KEY="436b184304bca6af33f79e4dacb3a2f2";
export const FETCH_WEATHER='FETCH_WEATHER';
const Forecast_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${WeatherForecast_API_KEY}`;

export function fetchWeather(city){
    const url=`${Forecast_URL}&q=${city},in`;
    const request=axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    };
}  