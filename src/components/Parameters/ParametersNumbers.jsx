import './ParametersNumbers.css';
import { useContext } from 'react';
import { WeatherContext } from "../../context/WeatherContext";

function ParametersNumbers() {
    const weather = useContext(WeatherContext);
    return (
        <div className='parameters_numbers'>
            <div className="sector parameters_sector parameters_numbers__uv">
                <h2 className='parameters_numbers__header'>Макс. UV-индекс</h2>
                <span className='parameters_numbers__value'>{weather?.uvIndex !== null ? weather?.uvIndex : '--'}</span>
                <p className='parameters_numbers__comment'>Умеренный</p>
            </div>
            <div className="sector parameters_sector parameters_numbers__preassure">
                <h2 className='parameters_numbers__header'>Давление</h2>
                <span className='parameters_numbers__value'>{weather?.preassure !== null ? weather?.preassure : '--'}</span>
                <span className='parameters_numbers__unit'>ммHg</span>
            </div>
            <div className="sector parameters_sector parameters_numbers__wind">
                <h2 className='parameters_numbers__header'>Ветер</h2>
                <span className='parameters_numbers__value'>{weather?.windSpeed !== null ? weather?.windSpeed : '--'}</span>
                <span className='parameters_numbers__unit'>м/с</span>
                <p className='parameters_numbers__comment'>Порывы: {weather?.windGusts !== null ? weather?.windGusts : '--'}м/с</p>
            </div>
            <div className="sector parameters_sector parameters_numbers__humidity">
                <h2 className='parameters_numbers__header'>Влажность</h2>
                <span className='parameters_numbers__value'>{weather?.humidity !== null ? weather?.humidity : '--'}%</span>
            </div>
        </div>
    );
}

export default ParametersNumbers;