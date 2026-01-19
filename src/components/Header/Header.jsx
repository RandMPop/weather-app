import "./Header.css";
import plusIcon from "../../assets/icons/plus.svg";
import settingsIcon from "../../assets/icons/settings.svg";
function Header(){
    return(
        <header className="header">
            <button className="header_add">
                <img src={plusIcon} alt="Добавить город"/>
            </button>
            <h1 className="header_location">Город 1</h1>
            <button className="header_settings">
                <img src={settingsIcon} alt="Открыть настройки"/>
            </button>
        </header>
    );
}

export default Header;