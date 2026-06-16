export function getWeatherIcon(code, isDay, variant) {

    if (code === 0) {
        if (variant === "full") {
            return isDay
                ? "/icons/weather/full/sun.svg"
                : "/icons/weather/full/moon.svg";
        }
        return isDay 
        ? "/icons/weather/partial/partial_sun.svg" 
        : "/icons/weather/partial/moon.svg";

    }

    if ([1, 2].includes(code)) {
        if (variant === "full") {
            return isDay
                ? "/icons/weather/full/cloudy.svg"
                : "/icons/weather/full/cloudy_moon.svg";
        }
        return isDay
            ? "/icons/weather/partial/cloudy.svg"
            : "/icons/weather/partial/cloudy_moon.svg";
    }

    if (code === 3) {
        return variant === "full"
            ? "/icons/weather/full/overcast.svg"
            : "/icons/weather/partial/overcast.svg";
    }

    if ([45, 48].includes(code)) {
        return variant === "full"
            ? "/icons/weather/full/fog.svg"
            : "/icons/weather/partial/fog.svg";
    }

    if ([51, 53, 55].includes(code)) {
        return variant === "full"
            ? "/icons/weather/full/shower.svg"
            : "/icons/weather/partial/shower.svg";
    }

    if ([56, 57, 61, 63, 65, 80, 81, 82].includes(code)) {
        return variant === "full"
            ? "/icons/weather/full/rain.svg"
            : "/icons/weather/partial/rain.svg";
    }

    if ([66, 67].includes(code)) {
        return variant === "full"
            ? "/icons/weather/full/snowfall.svg"
            : "/icons/weather/partial/snowfall.svg";
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return variant === "full"
            ? "/icons/weather/full/snow.svg"
            : "/icons/weather/partial/snow.svg";
    }

    if ([95, 96, 99].includes(code)) {
        return variant === "full"
            ? "/icons/weather/full/thunderstorm.svg"
            : "/icons/weather/partial/thunderstorm.svg";
    }
    return variant === "full"
        ? "/icons/weather/full/sun.svg"
        : "/icons/weather/partial/partial_sun.svg";
}