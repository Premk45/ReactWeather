import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false); 

    let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let API_KEY = "a194814fe975f7b951ef1ac4d1a5735a";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse = await response.json();
            let result = {
                city : city,
                temp : JsonResponse.main.temp,
                temp_max : JsonResponse.main.temp_max,
                temp_min : JsonResponse.main.temp_min,
                humidity : JsonResponse.main.humidity,
                feels_like : JsonResponse.main.feels_like,
                weather : JsonResponse.weather[0].description
            }
            return result; 
        }catch(err){
            throw err;
        }
        
    }

    let handleChange = (eve) => {
        setCity(eve.target.value);
    }

    let handleSubmit = async (eve) => {
        try{
            eve.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       
    }

    return (
        <div className='Search'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined"  
                    onChange={handleChange}
                    required
                    value={city} />
                <br /> <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            {error &&   <p style={{color : "red"}}> <i><b>  
                            No Such Place Exists! </b></i>
                        </p> 
            }
            
        </div>
    )
};