import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    let IMG_URL = "https://images.unsplash.com/photo-1518568071681-a4efdb560520?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Hot_Temp = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?b=1&s=170667a&w=0&k=20&c=fv4bbdGSWirsCUy06Qo3chENIEB8FN5-Z3iiw0UdL_c=";
    let Cold_Temp = "https://www.livemint.com/lm-img/img/2024/01/15/600x338/On-Sunday--Delhi-recorded-dense-fog-for-more-than-_1705281756649_1705281767580.jpg";
    let Rainy_Temp = "https://www.metropolisindia.com/upgrade/blog/upload/2021/08/rainy_season_tips.jpg";


    return (
        <div className="InfoBox">
            <div className='CardInfo'>
                <Card className='Card' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= {info.humidity > 80 ? Rainy_Temp : info.temp > 15 ? Hot_Temp : Cold_Temp }
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon /> }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p> Humidity = <b> {info.humidity}&deg;C </b></p>
                            <p> Temp = <b> {info.temp}&deg;C </b></p>
                            <p> Temp_Max = <b> {info.temp_max}&deg;C </b> </p>
                            <p> Temp_Min = <b> {info.temp_min}&deg;C </b></p>
                            <p>The Weather Can Be Described As <i><b> {info.weather} </b></i> 
                                And Feels Like <b> {info.feels_like}&deg;C </b> 
                            </p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}