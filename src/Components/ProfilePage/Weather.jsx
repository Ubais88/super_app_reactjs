import React, { useEffect, useState } from 'react'
import Style from "./Weather.module.scss"
import {LuWind , LuSunMedium} from "react-icons/lu"
import {PiThermometerSimpleBold , PiDropHalfBottomFill} from "react-icons/pi"
import {TiWeatherPartlySunny,TiWeatherShower,TiWeatherNight,TiWeatherStormy} from "react-icons/ti"

const Weather = () => {
    const [weatherData , setWeatherData] = useState({
        type:"",
        temp:"",
        pressure:"",
        windspeed:"",
        humidpercent:""
    })


    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth()+1;
    // const day = currentDate.getDate();
    // let hours = currentDate.getHours();
    // let ampm = "AM";
    // if(hours > 12){
    //     hours = hours - 12;
    //     ampm = "PM";
    // }
    // if(hours == 12){
    //     ampm == "PM" ? "AM" : "PM";
    // }
    // let minutes = currentDate.getMinutes();
    // if(minutes < 10){
    //     minutes = "0"+minutes;
    // }
    // const formatedDate = `${month}-${day}-${year}`
    // const formatedTime = `${hours}:${minutes} ${ampm}`

    console.log("Weather: ",weatherData)


    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=127688cc7cd242daad895522230710&q=Amroha`);
                
                const weatherdata = await data.json();
        

                setWeatherData({
                    type:weatherdata.current.condition.text,
                    temp:weatherdata.current.temp_c + "°C",
                    pressure:weatherdata.current.pressure_mb + " mbar",
                    windspeed:weatherdata.current.wind_kph + " km/h",
                    humidpercent:weatherdata.current.humidity+ "%",
                    rain:"LuSunMedium"
                })
                // console.log("Weather: ",weatherData)

            }
            catch(error){
                console.error('Error while fetching weather data:', error);
            }
        }
        fetchData();
    }, [])




  return (
    <div className={Style.main}>
        <div className={Style.left}>
            <span className={Style.date}>12/12/2333</span>
            <span className={Style.time}>10:12:PM</span>
        </div>

        <div className={Style.right}>
            <div className={Style.oneRow}>

                <div className={Style.weatherStatus}>
                {
                    weatherData.type === "Sunny" ? 
                    <LuSunMedium size={50} color='white'/> :
                    weatherData.type === "Partly cloudy" ? <TiWeatherPartlySunny size={50} color='white'/> :
                    weatherData.type === "Cloudy" ? <TiWeatherPartlySunny size={50} color='white'/> :
                    weatherData.type === "Patchy rain possible" ? <TiWeatherPartlySunny size={50} color='white'/> :
                    weatherData.type === "Overcast" ?<TiWeatherStormy size={50} color='white'/> :
                    weatherData.type === "Clear" ?<TiWeatherNight size={50} color='white'/> :
                    weatherData.type === "rain" ? <TiWeatherShower size={50} color='white'/> :
                    <TiWeatherPartlySunny size={50} color='white'/>  
                }
                    
                    <span className={Style.weathertext}>{weatherData.type}</span>
                </div>

                <div className={Style.line}></div>

                <div className={Style.tempContainer}>
                    <span className={Style.degree}>{weatherData.temp}</span>
                    <div className={Style.pressureiconContainer}>
                        <PiThermometerSimpleBold size={23}/>
                        <div className={Style.pressureContainer}>
                            <span className={Style.pressurenumber}>{weatherData.pressure}</span>
                            <span className={Style.pressureText}>Pressure</span>
                        </div>
                    </div>
                </div>

                <div className={Style.line}></div>

                <div className={Style.windcontainer}>
                    <div className={Style.windicon}>
                        <LuWind size={27} />
                        <div className={Style.speedContainer}>
                            <span className={Style.windtext}>{weatherData.windspeed}</span>
                            <span className={Style.windtext}>Wind</span>
                        </div>
                    </div>
                    
                    <div className={Style.humidContainer}>
                        <PiDropHalfBottomFill size={25}/>
                        <div className={Style.humidTextContainer}>
                            <span className={Style.humnidpercent}>{weatherData.humidpercent}</span>
                            <span className={Style.humitext}>Humidiy</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Weather