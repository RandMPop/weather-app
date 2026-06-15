import { useState, useEffect } from "react";
import { getWeather } from "../services/weatheAPI";
import { getWeatherDescription } from "../services/getWeatherDescription";
import { getWeatherIcon } from "../services/getWeatherIcon";
import { getRecommendations } from "../services/getRecommendations";
import { getHourlyWeather } from "../services/getHourlyWeather";

export function useWeather (){
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        getWeather()
        .then((data) => {
            const formatted = {
                ...data,
                weatherDescription: getWeatherDescription(data.code),
                weatherIcon: getWeatherIcon(data.code, data.isDay),
                weatherRecommendations: getRecommendations(
                    data.temp, 
                    data.windSpeed, 
                    data.windGusts, 
                    data.preassure, 
                    data.code, 
                    data.uvIndex, 
                    data.humidity, 
                    data.isDay
                ),
                hourlyWeather: getHourlyWeather(
                    data.currentTime,
                    data.hourlyTime,
                    data.hourlyTemp,
                    data.hourlyCode
                ),
            };

            setWeather(formatted);
        })
        .catch(console.error);
    },[]);

    return weather;
}