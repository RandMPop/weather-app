import {useRef} from 'react';
import {useDragScroll} from '../../hooks/useDragScroll';
import "./ForecastDay.css";
function ForecastDay() {
    const ref = useRef(null);
    useDragScroll (ref);
    return (
        <div ref={ref} className="forecast_day forecast_sector">
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
                        <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
            <div className="forecast_day__1hour">
                <div className="forecast_day__time">9:00</div>
                <img className="forecast_day__img" src="/icons/weather/sun.svg" />
                <div className="forecast_day__temp">23°C</div>
            </div>
        </div>
    );
}

export default ForecastDay;


