import { fetchWeatherApi } from "openmeteo";
export async function getWeather() {
    const params = {
        latitude: 55.7558,
        longitude: 37.6173,
        daily: ["uv_index_max", "weather_code", "temperature_2m_max"],
        hourly: ["temperature_2m", "weather_code"],
        current: ["temperature_2m", "apparent_temperature", "wind_speed_10m", "wind_gusts_10m", "surface_pressure", "weather_code", "relative_humidity_2m", "is_day"],
        timezone: "Europe/Moscow",
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        const current = response.current();
        const hourly = response.hourly();
        const daily = response.daily();

        const weatherData = {
            current: {
                time: new Date(Number(current.time()) * 1000),
                temperature_2m: current.variables(0) ? current.variables(0).value() : null,
                apparent_temperature: current.variables(1) ? current.variables(1).value() : null,
                wind_speed_10m: current.variables(2) ? current.variables(2).value() : null,
                wind_gusts_10m: current.variables(3) ? current.variables(3).value() : null,
                surface_pressure: current.variables(4) ? current.variables(4).value() : null,
                weather_code: current.variables(5) ? current.variables(5).value() : null,
                relative_humidity_2m: current.variables(6) ? current.variables(6).value() : null,
                is_day: current.variables(7) ? current.variables(7).value() : null,
            },
            hourly: {
                time: Array.from(
                    {
                        length:
                            (Number(hourly.timeEnd()) - Number(hourly.time())) /
                            hourly.interval(),
                    },
                    (_, i) =>
                        new Date(
                            (Number(hourly.time()) + i * hourly.interval()) * 1000
                        )
                ),
                temperature_2m: hourly.variables(0)
                    ? hourly.variables(0).valuesArray()
                    : null,
                weather_code: hourly.variables(0)
                    ? hourly.variables(1).valuesArray()
                    : null,
            },
            daily: {
                time: Array.from(
                    {
                        length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
                    },
                    (_, i) => new Date(
                        (Number(daily.time()) + i * daily.interval()) * 1000)
                ),
                uv_index_max: daily.variables(0) ? daily.variables(0).valuesArray()[0] : null,
                weather_code: daily.variables(1)
                    ? daily.variables(1).valuesArray()
                    : null,
                temperature_2m_max: daily.variables(2)
                    ? daily.variables(2).valuesArray()
                    : null,
            },
        };
        // console.log(weatherData.daily.time);
        // console.log(weatherData.daily.uv_index_max);
        // console.log(weatherData.daily.weather_code);
        // console.log(weatherData.daily.temperature_2m_max);

        return {
            temp: Math.round(weatherData.current.temperature_2m),
            apparentTemp: Math.round(weatherData.current.apparent_temperature),
            windSpeed: Math.round(weatherData.current.wind_speed_10m),
            windGusts: Math.round(weatherData.current.wind_gusts_10m),
            preassure: Math.round(weatherData.current.surface_pressure),
            code: weatherData.current.weather_code,
            humidity: weatherData.current.relative_humidity_2m,
            isDay: weatherData.current.is_day,
            currentTime: weatherData.current.time,
            hourlyTime: weatherData.hourly.time,
            hourlyTemp: weatherData.hourly.temperature_2m,
            hourlyCode: weatherData.hourly.weather_code,
            weeklyDates: weatherData.daily.time,
            uvIndex: Math.round(weatherData.daily.uv_index_max),
            weeklyCode: weatherData.daily.weather_code,
            weeklyTemp: weatherData.daily.temperature_2m_max
        }
    } catch (error) {
        console.log("Network error:", error)
    }
}