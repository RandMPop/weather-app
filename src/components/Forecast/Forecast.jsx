import './Forecast.css';
import ForecastMain from './ForecastMain';
import ForecastDay from './ForecastDay';
import ForecastWeek from './ForecastWeek';
function Forecast (){
    return(
        <div className="forecast">
            <ForecastMain />
            <ForecastDay />
            <ForecastWeek />
        </div>
    );
}
export default Forecast;