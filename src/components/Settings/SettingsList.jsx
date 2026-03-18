import "./SettingsList.css";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";
import { Link } from "react-router-dom";

function SettingsList() {
    return (
        <>
            <div className="settings_list__container">
                <Link to="/">
                    <img className="settings_list__back" src={arrowLeft}></img>
                </Link>
                <div className="sector settings_list__1setting settings_list__units">
                    Единицы измерения
                    <img className="settings_list__open" src={chevronRight}></img>
                </div>
            </div>
            <div className="settings_list">
                <div className="sector settings_list__1setting">
                    Уведомления
                    <img className="settings_list__open" src={chevronRight}></img>
                </div>
                <div className="sector settings_list__1setting">
                    Язык
                    <img className="settings_list__open" src={chevronRight}></img>
                </div>
            </div>
        </>
    );
}

export default SettingsList;