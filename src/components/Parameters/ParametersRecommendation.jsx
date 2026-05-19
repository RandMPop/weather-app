import './ParametersRecommendation.css';
import { useContext } from 'react';
import { WeatherContext } from "../../context/WeatherContext";
function ParametersRecommendation() {
    const weather = useContext(WeatherContext);
    return (
        <div className="sector parameters_recommendation parameters_sector">
            <h2 className='parameters_recommendation__header parameters__header'>
                Рекомендация дня
            </h2>
            <div className="parameters_recommendation__container">
                <p className='parameters_recommendation__text'>{weather?.weatherRecommendations !== null ? weather?.weatherRecommendations.join('\n') : '--'}
                </p>
            </div>
        </div>
    )
};

export default ParametersRecommendation;