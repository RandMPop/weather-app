import { useRef } from 'react';
import { useDragScroll } from '../../hooks/useDragScroll';
import "./ForecastDay.css";
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

function ForecastDay() {

    const weather = useContext(WeatherContext);

    const times = weather?.hourlyTemp?.hourlyTime ?? [];
    const temps = weather?.hourlyTemp?.hourlyTemp ?? [];
    const ref = useRef(null);

    useDragScroll(ref);

    return (
        <div ref={ref} className="sector forecast_day forecast_sector">
            {times.map((time, index) => (
                <div key={time} className="forecast_day__1hour">
                    <div className="forecast_day__time">{time}</div>
                    <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                    <div className="forecast_day__temp">{temps[index]}°C</div>
                </div>
            ))}
        </div>
    );
}

export default ForecastDay;


