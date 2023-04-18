import { useContext } from "react";
import { ServiceGetWeatherContext, 
    ServiceGetWeatherContextProvider } from '../WeatherServices/ServiceGetWeatherContext';
import Loader from "../../Loader";
// import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
// import MultiWeatherPage from '../MultiWeather/MultiWeatherPage'
import { ServiceMultiWeatherForecastContextProvider } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import ForecastSwich from "../ForecastSwich";

const GetWeatherInfo = () => {

    const { 
        timeOfDay, data, loader, errorMessage,
        message, selectValue, timeZone, time12,
        date, mainTemp, mainFeelsLike, currentDay,
        PM_AM, timeArray, year, month, day,
    } = useContext(ServiceGetWeatherContext)


    const info = (
        <div className="weather-info-container">
            <p className="just-info">Here you will see the weather information</p>
        </div>
    )

    

    const weather = (
        <>
        {loader 
        ? 
        <Loader /> 
        :
        <ForecastSwich />
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
                    {errorMessage ? errorMSG : null ||
                    data ? weather : info}
            </ServiceGetWeatherContextProvider>
       </>
    )

}

export default GetWeatherInfo


