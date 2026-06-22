import { getWeatherIcon } from "./getWeatherIcon";

export function getWeeklyWeather(dates, temps, codes) {

    const weeklyDate = dates
        .map(date =>
            date.toLocaleDateString("ru-RU", { weekday: "short" })
        );

    const weeklyTemp = temps
        .map(temp => Math.round(temp));

  
    const weeklyCode = Array.from(codes)
        .map((code) => {
            return getWeatherIcon(code,1,"full");
        });

    return {
       weeklyDate,
       weeklyTemp,
       weeklyCode
    };
};