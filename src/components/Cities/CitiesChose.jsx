import { useState, useEffect } from "react";
import "./CitiesChose.css";
import searchIcon from "../../assets/icons/search.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { searchCities } from "../../services/geocodingAPI";

const DEFAULT_CITIES = [
    {
        id: 1,
        name: "Москва",
        country: "Россия",
        region: "Москва",
        latitude: 55.7558,
        longitude: 37.6173,
    },
    {
        id: 2,
        name: "Пекин",
        country: "Китай",
        region: "Пекин",
        latitude: 39.9042,
        longitude: 116.4074,
    },
    {
        id: 3,
        name: "Токио",
        country: "Япония",
        region: "Токио",
        latitude: 35.6762,
        longitude: 139.6503,
    },
    {
        id: 4,
        name: "Лондон",
        country: "Британия",
        region: "Англия",
        latitude: 51.5072,
        longitude: -0.1276,
    },
];

function CitiesChose({ setCities }) {
    const[query, setQuery] = useState("");

    useEffect(() => {
        if(!query.trim()){
            setCities(DEFAULT_CITIES);
            return
        }
        searchCities(query).then((results) => {
            console.log("Результат поиска:", results);
            setCities(results);
        });
    },[query,setCities]);

    return (
        <div className="cities_chose__container">
            <div className="sector cities_chose__wrapper">
                <input 
                id="cities_chose" 
                className="cities_chose__input" 
                placeholder="Введите город"
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