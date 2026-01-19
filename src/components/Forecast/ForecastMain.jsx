import "./ForecastMain.css";
function ForecastMain () {
    return(
        <div className="forecast_main forecast_sector">
            <div className="forecast_main__temp">23<sup className="forecast_main__celsius">°C</sup></div>
            <div className="forecast_main__feels-like">Ощущается как 21°C</div>
            <div className="forecast_main__description">Преимущественно солнечно</div>
            <img className="forecast_main__img" src="/icons/weather/partial_sun.svg" alt="Солнечно"/>
        </div>
    );
}

export default ForecastMain;