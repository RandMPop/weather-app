export function getUVIndex(index) {
    if (index === null) {
        return "--";
    }
    if (index <= 2) {
        return "Низкий";
    }
    if (index <= 5) {
        return "Умеренный";
    }
    if (index <= 7) {
        return "Высокий";
    }
    if (index <= 10) {
        return "Очень высокий";
    }
    return "Экстремальный";
};