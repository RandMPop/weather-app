export function getRecommendations(temp, windSpeed, windGusts, preassure, code, uvIndex, humidity, isDay) {

    const recommendations = [];

    if (temp <= -10) {
        recommendations.push("🥶Надень термобельё и перчатки");
    } else if (temp > -10 && temp <= 5) {
        recommendations.push("☕Тёплая куртка и горячий напиток обязательны");
    } else if (temp > 5 && temp <= 15) {
        recommendations.push("🧥Возьми лёгкую куртку");
    } else if (temp >= 25) {
        recommendations.push("🧢Пей больше воды и надень головной убор");
    }

    if (windSpeed > 10) {
        recommendations.push("💨На улице сильный ветер");
    }

    if (windGusts > 25) {
        recommendations.push("🪟Лучше закрыть окна");
    }

    if (preassure < 1000) {
        recommendations.push("🛌Метеозависимым стоит отдохнуть");
    }

    if (humidity < 30) {
        recommendations.push("🌵Воздух очень сухой");
        
        if (temp <= 25) {
            recommendations.push("💧Пей больше воды и используй увлажнитель воздуха");
        }
    }

    if (uvIndex >= 3) {
        recommendations.push("🧴Используй SPF");
    }

    if (uvIndex >= 6) {
        recommendations.push("🌞Избегай долгого пребывания на солнце");
    }
    return recommendations;
}