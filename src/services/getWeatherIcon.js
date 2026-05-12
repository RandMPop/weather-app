export function getWeatherIcon(code, isDay) {

    if (code === 0) {
        return isDay ? "/icons/weather/partial_sun.svg" : "/icons/weather/moon.svg"
    }

    if ([1, 2].includes(code)) {
        return isDay
            ? "/icons/weather/cloudy.svg"
            : "/icons/weather/cloudy_moon.svg";
    }

    if (code === 3) {
        return "/icons/weather/overcast.svg";
    }

    if ([45, 48].includes(code)) {
        return "/icons/weather/fog.svg";
    }

    if ([51, 53, 55].includes(code)) {
        return "/icons/weather/shower.svg";
    }

    if ([56, 57, 61, 63, 65, 80, 81, 82].includes(code)) {
        return "/icons/weather/rain.svg";
    }

    if ([66, 67].includes(code)) {
        return "/icons/weather/snowfall.svg";
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return "/icons/weather/snow.svg";
    }

    if ([95, 96, 99].includes(code)) {
        return "/icons/weather/thunderstorm.svg";
    }

    return "/icons/weather/partial_sun.svg";
}