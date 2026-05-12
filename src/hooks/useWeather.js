import { useState, useEffect } from "react";
import { getWeather } from "../services/weatheAPI";
import { getWeatherDescription } from "../services/getWeatherDescription";
import { getWeatherIcon } from "../services/getWeatherIcon";

export function useWeather (){
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        getWeather()
        .then((data) => {
            const formatted = {
                ...data,
                weatherDescription: getWeatherDescription(data.code),
                weatherIcon: getWeatherIcon(data.code, data.isDay),
            };

            setWeather(formatted);
        })
        .catch(console.error);
    },[]);

    return weather;
}