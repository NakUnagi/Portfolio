import { useContext } from "react";
import { ServiceGetWeatherContext, 
    ServiceGetWeatherContextProvider } from '../WeatherServices/ServiceGetWeatherContext';
import Loader from "../../Loader";
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import MultiWeatherPage from '../MultiWeather/MultiWeatherPage'
import { ServiceMultiWeatherForecastContextProvider } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import { WeatherInfoTemplateContextProvioder } from '../WeatherInfoTemplate/WeatherInfoTemplateContext'
import weatherInfo from '../weatherInfoJSON'

const GetWeatherInfo = () => {

    const { 
        timeOfDay, data, loader, errorMessage,
        message, selectValue, timeZone, time12,
        date, mainTemp, mainFeelsLike, currentDay
    } = useContext(ServiceGetWeatherContext)

    const info = (
        <div className="weather-info-container">
            <p className="just-info">Here you will see the weather information</p>
        </div>
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
        <WeatherInfoTemplate 
            name={data.name}
            img={img.slice(11)}
            // currentTime={time12}
            currentDay={currentDay}
            date={date}
            mainTemp={Math.floor(mainTemp)}
            mainFeelsLike={Math.floor(mainFeelsLike)}
            // tempUnit={tempUnit()}
            weather={data.weather[0].main}
            descLength={desc.length > 0 && ':'}
            desc={desc}
            humidity={data.main.humidity}
            pressure={data.main.pressure}
            sunrise={new Date(data.sys.sunrise * 1000).toLocaleTimeString(`${country.toLowerCase()}-${country}`, {hour12: true, timeZone: timeZone})}
            sunset={new Date(data.sys.sunset * 1000).toLocaleTimeString(`${country.toLowerCase()}-${country}`, {hour12: true, timeZone: timeZone})}
        />
        }
        </>
    )

    const errorMSG = (
        <div className="weather-info-container">
            <p className="just-info">{message}</p>
        </div>
    )

    return(
       <>
            <ServiceGetWeatherContextProvider>
                <WeatherInfoTemplateContextProvioder>
                    {errorMessage ? errorMSG : null ||
                    data ? weather : info}
                </WeatherInfoTemplateContextProvioder>
            </ServiceGetWeatherContextProvider>
            <ServiceMultiWeatherForecastContextProvider>
                <WeatherInfoTemplateContextProvioder>
                    {errorMessage ? errorMSG : null ||
                    data ? <MultiWeatherPage /> : info}
                </WeatherInfoTemplateContextProvioder>
            </ServiceMultiWeatherForecastContextProvider>
       </>

            // <WeatherInfoTemplateContextProvioder>
            //     <ServiceGetWeatherContextProvider>
            //         {errorMessage ? errorMSG : null ||
            //         data ? weather : info}
            //     </ServiceGetWeatherContextProvider>
            //     <ServiceMultiWeatherForecastContextProvider>
            //         {errorMessage ? errorMSG : null ||
            //         data ? <MultiWeatherPage /> : info}
            //     </ServiceMultiWeatherForecastContextProvider>
            // </WeatherInfoTemplateContextProvioder>
    )

}

export default GetWeatherInfo


