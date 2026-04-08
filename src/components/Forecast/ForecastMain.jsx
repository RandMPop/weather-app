import "./ForecastMain.css";
import { getWeather } from "../../services/weatheAPI";
import { useState,useEffect } from "react";
 
function ForecastMain () {
    const [temp, setTemp] = useState(null);
    useEffect(() => {
        getWeather()
        .then(setTemp)
        .catch(console.error);
    },[]);
    return(
        <div className="sector forecast_main forecast_sector">
            <div className="forecast_main__temp">
                {temp !== null ? temp : '--'}
                <sup className="forecast_main__celsius">°C</sup></div>
            <div className="forecast_main__feels-like">Ощущается как 21°C</div>
            <div className="forecast_main__description">Преимущественно солнечно</div>
            <img className="forecast_main__img" src="/icons/weather/partial_sun.svg" alt="Солнечно"/>
        </div>
    );
}

export default ForecastMain;