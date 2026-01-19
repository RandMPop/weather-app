import "./ForecastWeek.css"
function ForecastWeek() {
    return (
        <div className="forecast_week forecast_sector">
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">пн</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">вт</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">ср</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">чт</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">пт</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">сб</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
            <div className="forecast_week__1day">
                <div className="forecast_week__weekday">вс</div>
                <img className="forecast_week__img" src="/icons/weather/sun.svg" />
                <div className="forecast_week__temp">23°C</div>
            </div>
        </div>
    );
}

export default ForecastWeek;
