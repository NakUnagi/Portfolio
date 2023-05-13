import { useContext, useState } from "react";
import { ServiceGetWeatherContext, 
    ServiceGetWeatherContextProvider } from '../WeatherServices/ServiceGetWeatherContext';
import Loader from "../../Loader";
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import MultiWeatherPage from '../MultiWeather/MultiWeatherPage'
import { ServiceMultiWeatherForecastContextProvider } from '../WeatherServices/ServiceMultiWeatherForecastContext'

import weatherInfo from '../weatherInfoJSON'

const GetWeatherInfo = () => {

    const [showSingleForecast, setShowSingleForecast] = useState(true)
    const [showMultiForecast, setShowMultiForecast] = useState(false)

    const { 
        timeOfDay, data, loader, errorMessage,
        message, selectValue, timeZone,
        date, mainTemp, mainFeelsLike, currentDay,
        PM_AM, timeArray, year, month, day, 
        getTimeZoneName, lat, long
    } = useContext(ServiceGetWeatherContext)


    const info = (
        <div className="weather-info-container">
            <p className="just-info">Here you will see the weather information</p>
        </div>
    )

    const text = (
        !showSingleForecast ? 'Current weather forecast' : 'Five-day weather forecast.'
    )

    let img = ''
    let desc = ''
    weatherInfo.map(item => {
        if (data && data.weather[0].id === item.id) {
            desc = item.description
            if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay === 'n')) {
                img = item.n
                return img
            } else {
                img = item.img
                return img
            }
        }
    } )

    
    const country = data && data.sys.country

    const weather = (
        <>
        {loader 
        ? 
        <Loader /> 
        :
        showSingleForecast
            &&
        <WeatherInfoTemplate 
            name={data.name}
            img={img.slice(11)}
            currentDay={currentDay}
            date={date}
            timeArray={timeArray}
            PM_AM={PM_AM}
            year={year}
            month={month}
            day={day}
            mainTemp={Math.floor(mainTemp)}
            mainFeelsLike={Math.floor(mainFeelsLike)}
            weather={data.weather[0].main}
            descLength={desc.length > 0 && ':'}
            desc={desc}
            selectValue={selectValue}
            humidity={data.main.humidity}
            pressure={data.main.pressure}
            sunrise={new Date(data.sys.sunrise * 1000).toLocaleTimeString(`${country.toLowerCase()}-${country}`, {hour12: true, timeZone: timeZone})}
            sunset={new Date(data.sys.sunset * 1000).toLocaleTimeString(`${country.toLowerCase()}-${country}`, {hour12: true, timeZone: timeZone})}
        />
        }
        </>
    )

    const multiWeather = (
        <>
        {loader 
        ? 
        <Loader /> 
        :
        showMultiForecast
            &&
        <MultiWeatherPage />
        }
        </>
    )

    const errorMSG = (
        <div className="weather-info-container">
            <p className="just-info">{message}</p>
        </div>
    )

    const handleClick = () => {
        setShowMultiForecast(prev => !prev)
        setShowSingleForecast(prev => !prev)
        getTimeZoneName(lat, long)
    }


    return(
       <>
            <div className="d-block">
                {   data 
                        ? 
                    <>
                        <button 
                        className="swich-button btn btn-mode"
                        onClick={handleClick}
                        >
                            {text}
                        </button>
                    </>
                        :
                    null    
                }
                <ServiceGetWeatherContextProvider>
                        {errorMessage ? errorMSG : null ||
                        data ? weather : info}
                </ServiceGetWeatherContextProvider>
                <ServiceMultiWeatherForecastContextProvider>
                        { data && multiWeather }
                </ServiceMultiWeatherForecastContextProvider>
            </div>
       </>
    )

}

export default GetWeatherInfo


