import { createContext, useState } from "react";
import { useWeather } from "../hooks/useWeather";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {

    const [selectedCity, setSelectedCity] = useState({
        name: "Москва",
        latitude: 55.7558,
        longitude: 37.6173,
        country: "Россия",
        region: "Москва",
    });

    const weather = useWeather(selectedCity);

    return (
        <WeatherContext.Provider value={{
            ...weather,
            selectedCity,
            setSelectedCity,
        }}>
            {children}
        </WeatherContext.Provider>
    );
}