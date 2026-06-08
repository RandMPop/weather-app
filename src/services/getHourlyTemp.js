export function getHourlyTemp(now, hours, temps) {
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
    return {
        hourlyTime,
        hourlyTemp,
    };
};