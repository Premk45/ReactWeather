import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"


export default function WeatherApp() {
    let [WeatherInfo , setWeather] = useState({
        city : "Delhi",
        feels_like : 28.29,
        humidity : 20,
        temp : 30.06,
        temp_max : 30.06,
        temp_min : 30.05,
        weather : "haze"
    });

    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    }
    return (
        <div style={{textAlign : "center"}}>
            <h1>Weather App By KALAKAR</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {WeatherInfo}/>
           
        </div>
    )
}