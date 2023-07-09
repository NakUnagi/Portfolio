import React, { useContext, useEffect, useState } from "react";
import { ServiceGetWeatherContext } from '../WeatherServices/ServiceGetWeatherContext';
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import Swiper from '../../Swiper/Swiper'
import weatherInfo from '../weatherInfoJSON'


 const MultiWeatherPage = props => {

    const [firstRequest, setFirstRequest] = useState(false)

    const { 
        data, selectValue, PM_AM, timeArray, timeZone
    } = useContext(ServiceGetWeatherContext)

    const { req, bodyRequest, timeOfDay2 } = useContext(ServiceMultiWeatherForecastContext)

    const forecastDayArray = []

    let img = ''
    let desc = ''
    let multiForecast = false

    const runRequest = () => {
        if(!firstRequest) {
            req()
            setFirstRequest(true)
        }
       
    }
    
    const country = data && data.sys.country


    const singleDay = () =>{
        Object.entries(bodyRequest).map(day => {
            let currentDay = new Date((day[1].dt) * 1000).toLocaleDateString()
            console.log(currentDay)
            const currentDeyTime = new Date((day[1].dt) * 1000).toLocaleTimeString(`${country.toLowerCase()}-${country}`, {hour12: true, timeZone: timeZone})
            const currentDate = `${currentDay}, ${currentDeyTime}`
            let currentDay_YEAR = currentDay.slice(6,10)
            let currentDay_MONTH = currentDay.slice(3,5)
            let currentDay_DAY = currentDay.slice(0,2)
            if(currentDay_DAY < 10) {
                currentDay_DAY = '0'+currentDay.slice(0,1)
                currentDay_MONTH = currentDay.slice(2,4)
                currentDay_YEAR = currentDay.slice(5,10)
            }
            multiForecast = true
    
                    weatherInfo.map(item => {
                        if (day && day[1].weather[0].id === item.id) {
                            desc = item.description
                            if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay2[0] === 'n')) {
                                img = item.n
                                return img
                            } else {
                                img = item.img
                                return img
                            }
                        }
                    })
                    
            return (
                forecastDayArray.push(
                    <div className="swiper-slide" key={day[1].dt}>
                        <WeatherInfoTemplate 
                            name={data.name}
                            img={img.slice(11)}
                            currentTime={day[1]}
                            currentDay={currentDate}
                            selectValue={selectValue}
                            timeArray={timeArray}
                            PM_AM={PM_AM}
                            year={currentDay_YEAR} 
                            month={currentDay_MONTH}
                            day={currentDay_DAY}
                            mainTemp={Math.floor(day[1].main.temp)}
                            mainFeelsLike={Math.floor(day[1].main.feels_like)}
                            weather={day[1].weather[0].main}
                            descLength={desc.length > 0 && ':'}
                            desc={desc}
                            humidity={day[1].main.humidity}
                            pressure={day[1].main.pressure}
                            multiForecast={multiForecast}
                        />
                    </div>
                ) 
            )
        })
    }
    singleDay()
    useEffect(() => {
        runRequest()
        singleDay()
    }, [bodyRequest])

    return (
        <ServiceMultiWeatherForecastContextProvider>
            <div className="weather-info-container multy-data">
                <Swiper slideProps={forecastDayArray}/>
            </div>
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage