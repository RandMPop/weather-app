import "./ForecastWeek.css";
import { useRef } from 'react';
import { useDragScroll } from '../../hooks/useDragScroll';
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

function ForecastWeek() {

    const weather = useContext(WeatherContext);

    const dates = weather?.weeklyWeather?.weeklyDate ?? [];
    const temps = weather?.weeklyWeather?.weeklyTemp ?? [];
    const icons = weather?.weeklyWeather?.weeklyCode ?? [];
    const ref = useRef(null);

    useDragScroll(ref);

    return (
        <div ref={ref} className="sector forecast_week forecast_sector">
            {dates.map((date, index) => (
                <div key={date} className="forecast_week__1day">
                    <div className="forecast_week__weekday">{date}</div>
                    <img className="forecast_week__img" src={icons[index]} />
                    <div className="forecast_week__temp">{temps[index]}°C</div>
                </div>
            ))}
        </div>
    );
}

export default ForecastWeek;
