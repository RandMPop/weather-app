import { createContext} from "react";
import { useWeather } from "../hooks/useWeather";

export const WeatherContext = createContext();

export function WeatherProvider ({children}) {
    const weather = useWeather();

    return(
        <WeatherContext.Provider value={weather}>
            {children}
        </WeatherContext.Provider>
    );
}