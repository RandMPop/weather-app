export function getWeatherIcon(code, isDay, variant) {
    const BASE_URL = import.meta.env.BASE_URL;
    if (code === 0) {
        if (variant === "full") {
            return isDay
                ? `${BASE_URL}icons/weather/full/sun.svg`
                : `${BASE_URL}icons/weather/full/moon.svg`;
        }
        return isDay 
        ? `${BASE_URL}icons/weather/partial/partial_sun.svg` 
        : `${BASE_URL}icons/weather/partial/moon.svg`;

    }

    if ([1, 2].includes(code)) {
        if (variant === "full") {
            return isDay
                ? `${BASE_URL}icons/weather/full/cloudy.svg`
                : `${BASE_URL}icons/weather/full/cloudy_moon.svg`;
        }
        return isDay
            ? `${BASE_URL}icons/weather/partial/cloudy.svg`
            : `${BASE_URL}icons/weather/partial/cloudy_moon.svg`;
    }

    if (code === 3) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/overcast.svg`
            : `${BASE_URL}icons/weather/partial/overcast.svg`;
    }

    if ([45, 48].includes(code)) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/fog.svg`
            : `${BASE_URL}icons/weather/partial/fog.svg`;
    }

    if ([51, 53, 55].includes(code)) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/shower.svg`
            : `${BASE_URL}icons/weather/partial/shower.svg`;
    }

    if ([56, 57, 61, 63, 65, 80, 81, 82].includes(code)) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/rain.svg`
            : `${BASE_URL}icons/weather/partial/rain.svg`;
    }

    if ([66, 67].includes(code)) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/snowfall.svg`
            : `${BASE_URL}icons/weather/partial/snowfall.svg`;
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/snow.svg`
            : `${BASE_URL}icons/weather/partial/snow.svg`;
    }

    if ([95, 96, 99].includes(code)) {
        return variant === "full"
            ? `${BASE_URL}icons/weather/full/thunderstorm.svg`
            : `${BASE_URL}icons/weather/partial/thunderstorm.svg`;
    }
    return variant === "full"
        ? `${BASE_URL}icons/weather/full/sun.svg`
        : `${BASE_URL}icons/weather/partial/partial_sun.svg`;
}