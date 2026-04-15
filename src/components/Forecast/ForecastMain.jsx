import "./ForecastMain.css";
import { useContext } from 'react';
import { WeatherContext } from "../../context/WeatherContext";

 
function ForecastMain () {
    const weather = useContext(WeatherContext);
    return(
        <div className="sector forecast_main forecast_sector">
            <div className="forecast_main__temp">
                {weather?.temp !== null ? weather?.temp : '--'}
                <sup className="forecast_main__celsius">°C</sup></div>
            <div className="forecast_main__feels-like">Ощущается как {weather?.apparentTemp !== null ? weather?.apparentTemp : '--'}°C
                </div>
            <div className="forecast_main__description">Облачно</div>
            <img className="forecast_main__img" src="/icons/weather/partial_sun.svg" alt="Солнечно"/>
        </div>
    );
}

export default ForecastMain;