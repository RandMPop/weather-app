import "./CitiesList.css";

function CitiesList({ cities }) {
    return (
        <div className="cities_list">
            {/* <div className="sector cities_list_1city">
                <p className="cities_list__default">По умолчанию</p>
                <p className="cities_list__name">Город 1</p>
                <span className="cities_list__value">
                        23
                        <sup class="cities_list__celsius">°C</sup>
                </span>
            </div> */}
            {cities.map((city) => (
                <div
                className="sector cities_list_1city"
                key={`${city.latitude}-${city.longitude}`}
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