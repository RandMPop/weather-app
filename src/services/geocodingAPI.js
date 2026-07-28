export async function searchCities(query) {
    if (!query.trim()) return [];

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?` +
        `name=${encodeURIComponent(query)}` +
        `&count=10` +
        `&language=ru` +
        `&format=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return (data.results ?? []).map(city => ({
            id: city.id,
            name: city.name,
            country: city.country,
            region: city.admin1,
            latitude: city.latitude,
            longitude: city.longitude,
            timezone: city.timezone,
        }));
    } catch (error) {
        console.log("Network error:", error);
        return [];
    }
}