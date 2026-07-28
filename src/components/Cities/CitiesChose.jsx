import { useState } from "react";
import "./CitiesChose.css";
import searchIcon from "../../assets/icons/search.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
function CitiesChose() {
    const[query, setQuery] = useState("");
    const [cities, setCities] = useState([]);
    return (
        <div className="cities_chose__container">
            <div className="sector cities_chose__wrapper">
                <input 
                id="cities_chose" 
                className="cities_chose__input" 
                placeholder="Выбрать город"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                ></input>
                <img className="cities_chose__icon" src={searchIcon}></img>
            </div>
            <Link to="/">
                <img className="cities_chose__back" src={arrowRight}></img>
            </Link>
        </div>
    );
}

export default CitiesChose;