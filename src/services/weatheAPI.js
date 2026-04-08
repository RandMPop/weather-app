export async function getWeather(){
    try{
        const response = await fetch('https://api.open-meteo.com/v1/forecast?hourly=&timezone=Europe%2FMoscow&latitude=55.7522&longitude=37.6156&current=temperature_2m');
        if (!response.ok){
            console.log("HTTP Error:", response.status);
            return;
        }
        const data = await response.json();
        console.log(data);
        return data.current?.temperature_2m;
    } catch (error){
        console.log("Network error");
    }
};