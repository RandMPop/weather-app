import "./CitiesList.css";

function CitiesList() {
    return (
        <div className="cities_list">
            <div className="sector cities_list_1city">
                <p className="cities_list__default">По умолчанию</p>
                <p className="cities_list__name">Город 1</p>
                <span className="cities_list__value">
                        23
                        <sup class="cities_list__celsius">°C</sup>
                </span>
            </div>
            <div className="sector cities_list_1city">
                <p className="cities_list__name">Город 2</p>
                <span className="cities_list__value">
                        21
                        <sup class="cities_list__celsius">°C</sup>
                </span>
            </div>
            <div className="sector cities_list_1city">
                <p className="cities_list__name">Город 3</p>
                <span className="cities_list__value">
                        19
                        <sup class="cities_list__celsius">°C</sup>
                </span>
            </div>
            <div className="sector cities_list_1city">
                <p className="cities_list__name">Город 4</p>
                <span className="cities_list__value">
                        15
                        <sup class="cities_list__celsius">°C</sup>
                </span>
            </div>
            <div className="sector cities_list_1city">
                <p className="cities_list__name">Город 5</p>
                <span className="cities_list__value">
                        22
                        <sup class="cities_list__celsius">°C</sup>
                </span>
            </div>
        </div>
    );
}

export default CitiesList;