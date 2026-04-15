import { useState, useEffect } from "react";
import { getWeather } from "../services/weatheAPI";

export function useWeather (){
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        getWeather()
        .then(setWeather)
        .catch(console.error);
    },[]);

    return weather;
}