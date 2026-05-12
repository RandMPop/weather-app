import { fetchWeatherApi } from "openmeteo";
export async function getWeather() {
    const params = {
        latitude: 55.7558,
        longitude: 37.6173,
        daily: ["uv_index_max"],
        hourly: ["relative_humidity_2m"],
        current: ["temperature_2m", "apparent_temperature", "wind_speed_10m", "wind_gusts_10m", "surface_pressure", "weather_code", "relative_humidity_2m", "is_day"],
        timezone: "Europe/Moscow",
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        const current = response.current();
        const daily = response.daily();

        const weatherData = {
            current: {
                temperature_2m: current.variables(0) ? current.variables(0).value() : null,
                apparent_temperature: current.variables(1) ? current.variables(1).value() : null,
                wind_speed_10m: current.variables(2) ? current.variables(2).value() : null,
                wind_gusts_10m: current.variables(3) ? current.variables(3).value() : null,
                surface_pressure: current.variables(4) ? current.variables(4).value() : null,
                weather_code: current.variables(5) ? current.variables(5).value() : null,
                relative_humidity_2m: current.variables(6) ? current.variables(6).value() : null,
                is_day: current.variables(7) ? current.variables(7).value() : null,
            },
            daily: {
                uv_index_max: daily.variables(0) ? daily.variables(0).valuesArray()[0] : null,
            },
        };

        return {
            temp: Math.round(weatherData.current.temperature_2m),
            apparentTemp: Math.round(weatherData.current.apparent_temperature),
            windSpeed: Math.round(weatherData.current.wind_speed_10m),
            windGusts: Math.round(weatherData.current.wind_gusts_10m),
            preassure: Math.round(weatherData.current.surface_pressure),
            code: weatherData.current.weather_code,
            uvIndex: Math.round(weatherData.daily.uv_index_max),
            humidity: weatherData.current.relative_humidity_2m,
            isDay: weatherData.current.is_day,
        }
    } catch (error) {
        console.log("Network error:", error)
    }
}