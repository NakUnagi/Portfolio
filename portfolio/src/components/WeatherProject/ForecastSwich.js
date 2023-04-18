import React, {useContext, useState} from "react";
import { ServiceGetWeatherContext, 
    ServiceGetWeatherContextProvider } from './WeatherServices/ServiceGetWeatherContext';
import WeatherInfoTemplate from './WeatherInfoTemplate/WeatherInfoTemplate'
import MultiWeatherPage from './MultiWeather/MultiWeatherPage'
import { ServiceMultiWeatherForecastContextProvider } from './WeatherServices/ServiceMultiWeatherForecastContext'
import weatherInfo from './weatherInfoJSON'


const ForecastSwich = () => {

    const [displaySingleDay, setDisplaySingleDay] = useState(false)
    const [displayMultiDay, setDisplayMultiDay] = useState(false)

    const { 
        timeOfDay, data, loader, errorMessage,
        message, selectValue, timeZone, time12,
        date, mainTemp, mainFeelsLike, currentDay,
        PM_AM, timeArray, year, month, day,
    } = useContext(ServiceGetWeatherContext)

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

    const test = (
            <>
                {
                    data 
                        ?
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
                    :
                        null
                }
            </>            
    )

    const handleDisplayForecast = e => {
        const valueTarget = e.target.value
        
        switch(valueTarget) {
            case 'single':
                setDisplayMultiDay(false) 
                setDisplaySingleDay(true)   
                break;
            case 'multi':
                setDisplaySingleDay(false)   
                setDisplayMultiDay(true)
                break;
            default:
                console.error('Something went wrong')             
        }
    }

    return(
        <>
            <ServiceGetWeatherContextProvider>
                <ServiceMultiWeatherForecastContextProvider>
                        <button onClick={handleDisplayForecast} value="single">singleDay</button>
                        <button onClick={handleDisplayForecast} value="multi">MultiDay</button>
                        <div>
                            <div className={displaySingleDay ? 'show-component' : 'hide-component'}>
                                {
                                    test
                                }
                            </div>
                            <div className={displayMultiDay ? 'show-component' : 'hide-component'}>
                                <MultiWeatherPage />  
                            </div>
                        </div>
                </ServiceMultiWeatherForecastContextProvider>
            </ServiceGetWeatherContextProvider>
        </>
    )

}

export default ForecastSwich
