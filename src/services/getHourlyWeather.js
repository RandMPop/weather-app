import { getWeatherIcon } from "./getWeatherIcon";

export function getHourlyWeather(now, hours, temps, codes) {
    const hourNow = now.setMinutes(0, 0, 0);
    
    const currentHourIndex = hours.findIndex(
        hour => hour.getTime() === +hourNow
    );
    const hourlyTime = hours
        .slice(currentHourIndex, currentHourIndex + 12)
        .map(hour =>
            hour.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })
        );

    const hourlyTemp = temps
        .slice(currentHourIndex, currentHourIndex + 12)
        .map(temp => Math.round(temp));

    const iconHours = hours.slice(currentHourIndex, currentHourIndex + 12);    
    const hourlyCode = Array.from(codes
        .slice(currentHourIndex, currentHourIndex + 12))
        .map((code, index) => {
            const hour = iconHours[index].getHours();
            const isDay = (hour > 5)&&( hour < 17);
            return getWeatherIcon(code,isDay,"full");
        });

    return {
        hourlyTime,
        hourlyTemp,
        hourlyCode
    };
};