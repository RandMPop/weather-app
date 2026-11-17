import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import "./Header.css";
import plusIcon from "../../assets/icons/plus.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import { Link } from "react-router-dom";
function Header() {
    const { selectedCity } = useContext(WeatherContext);

    return (
        <header className="header">
            <Link to="/cities">
                <button className="header_add">
                    <img src={plusIcon} alt="Добавить город" />
                </button>
            </Link>
            <h1 className="header_location">{selectedCity.name}</h1>
            <Link to="/settings">
                <button className="header_settings">
                    <img src={settingsIcon} alt="Открыть настройки" />
                </button>
            </Link>
        </header>
    );
}

export default Header;