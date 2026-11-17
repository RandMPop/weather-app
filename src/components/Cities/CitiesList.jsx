import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { useNavigate } from "react-router-dom";
import "./CitiesList.css";

function CitiesList({ cities }) {
    const { setSelectedCity } = useContext(WeatherContext);
    const navigate = useNavigate();

    return (
        <div className="cities_list">
            {cities.map((city) => (
                <div
                    className="sector cities_list_1city"
                    key={`${city.latitude}-${city.longitude}`}
                    onClick={() => {
                        setSelectedCity(city);
                        navigate("/");
                    }}
                >
                    <p className="cities_list__name">
                        {city.name}
                    </p>
                    <p className="cities_list__location">
                        {[city.country, city.region].filter(Boolean).join(", ")}
                    </p>
                </div>

            ))}

        </div>
    );
}

export default CitiesList;