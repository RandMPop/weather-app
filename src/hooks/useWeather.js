import { useState, useEffect } from "react";
import { getWeather } from "../services/weatheAPI";
import { getWeatherDescription } from "../services/getWeatherDescription";
import { getWeatherIcon } from "../services/getWeatherIcon";
import { getRecommendations } from "../services/getRecommendations";

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
                )
            };

            setWeather(formatted);
        })
        .catch(console.error);
    },[]);

    return weather;
}