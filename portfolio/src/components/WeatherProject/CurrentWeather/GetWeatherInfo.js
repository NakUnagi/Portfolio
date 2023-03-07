import { useContext } from "react";
import { ServiceGetWeatherContext, 
    ServiceGetWeatherContextProvider } from './ServiceGetWeatherContext';
import Loader from "../../Loader";


const GetWeatherInfo = () => {

    const { 
        description, 
        ikonID, 
        timeOfDay, 
        data, 
        name,
        loader,
        errorMessage,
        message,
        cod } = useContext(ServiceGetWeatherContext)
    const weatherInfo = [
        {
            id: 200,
            description: 'thunderstorm with light rain',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 201,
            description: 'thunderstorm with rain',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 200,
            description: 'thunderstorm with heavy rain',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 210,
            description: 'light thunderstorm',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 211,
            description: 'thunderstorm',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 212,
            description : 'heavy thunderstorm ',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 221,
            description: 'ragged thunderstorm',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 230,
            description: 'thunderstorm with light drizzle',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 231,
            description: 'thunderstorm with drizzle',
            img: '../../media/weather_icons/thunder.svg'
        },
        {
            id: 232,
            description: 'thunderstorm with heavy drizzle',
            img: '../../media/weather_icons/thunder.svg'
        },

        {
            id: 300,
            description: 'light intensity drizzle',
            img: '../../media/weather_icons/rainy-4.svg'
        },
        {
            id: 301,
            description: 'drizzle',
            img: '../../media/weather_icons/rainy-5.svg'
        },
        {
            id: 302,
            description: 'heavy intensity drizzle',
            img: '../../media/weather_icons/rainy-6.svg'
        },
        {
            id: 310,
            description: 'light intensity drizzle rain',
            img: '../../media/weather_icons/rainy-4.svg'
        },
        {
            id: 311,
            description: 'drizzle rain',
            img: '../../media/weather_icons/rainy-4.svg'
        },
        {
            id: 312,
            description: 'heavy intensity drizzle rain',
            img: '../../media/weather_icons/rainy-6.svg'
        },
        {
            id: 313,
            description: 'shower rain and drizzle',
            img: '../../media/weather_icons/rainy-5.svg'
        },
        {
            id: 314,
            description: 'heavy shower rain and drizzle',
            img: '../../media/weather_icons/rainy-7.svg'
        },
        {
            id: 321,
            description: 'shower drizzle',
            img: '../../media/weather_icons/rainy-5.svg'
        },
        
        {
            id: 500,
            description: 'light rain',
            img: '../../media/weather_icons/rainy-2.svg'
        },
        {
            id: 501,
            description: 'moderate rain',
            img: '../../media/weather_icons/rainy-2.svg'
        },
        {
            id: 502,
            description: 'heavy intensity rain',
            img: '../../media/weather_icons/rainy-7.svg'
        },
        {
            id: 503,
            description: 'very heavy rain',
            img: '../../media/weather_icons/rainy-7.svg'
        },
        {
            id: 504,
            description: 'extreme rain',
            img: '../../media/weather_icons/rainy-7.svg'
        },
        {
            id: 511,
            description: 'freezing rain',
            img: '../../media/weather_icons/rainy-5.svg'
        },
        {
            id: 520,
            description: 'light intensity shower rain',
            img: '../../media/weather_icons/rainy-4.svg'
        },
        {
            id: 521,
            description: 'shower rain',
            img: '../../media/weather_icons/rainy-6.svg'
        },
        {
            id: 522,
            description: 'heavy intensity shower rain',
            img: '../../media/weather_icons/rainy-7.svg'
        },
        {
            id: 531,
            description: 'ragged shower rain',
            img: '../../media/weather_icons/rainy-6.svg'
        },

        {
            id: 600,
            description: 'light snow',
            img: '../../media/weather_icons/snowy-2.svg'
        },
        {
            id: 601,
            description: 'snow',
            img: '../../media/weather_icons/snowy-6.svg'
        },
        {
            id: 602,
            description: 'heavy snow',
            img: '../../media/weather_icons/snowy-6.svg'
        },
        {
            id: 611,
            description: 'sleet',
            img: '../../media/weather_icons/snowy-6.svg'
        },
        {
            id: 612,
            description: 'light shower sleet',
            img: '../../media/weather_icons/snowy-5.svg'
        },
        {
            id: 613,
            description: 'shower sleet',
            img: '../../media/weather_icons/snowy-5.svg'
        },
        {
            id: 615,
            description: 'light rain and snow',
            img: '../../media/weather_icons/snowy-5.svg'
        },
        {
            id: 616,
            description: 'rain and snow',
            img: '../../media/weather_icons/snowy-5.svg'
        },
        {
            id: 620,
            description: 'light shower snow',
            img: '../../media/weather_icons/snowy-5.svg'
        },
        {
            id: 621,
            description: 'shower snow',
            img: '../../media/weather_icons/snowy-5.svg'
        },
        {
            id: 622,
            description: 'heavy shower snow',
            img: '../../media/weather_icons/snowy-6.svg'
        },
        		
        // {
        //     id: 701,
        //     description: 'mist',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 711,
        //     description: 'smoke',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 721,
        //     description: 'haze',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 731,
        //     description: 'sand/dust whirls',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 741,
        //     description: 'fog',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 751,
        //     description: 'sand',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 761,
        //     description: 'dust',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 762,
        //     description: 'volcanic ash',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 771,
        //     description: 'squalls',
        //     img: '../../media/weather_icons/'
        // },
        // {
        //     id: 781,
        //     description: 'tornado',
        //     img: '../../media/weather_icons/'
        // },
	
        {
            id: 800,
            description: 'clear sky',
            img: '../../media/weather_icons/day.svg',
            n: '../../media/weather_icons/night.svg'
        },

        {
            id: 801,
            description: 'few clouds: 11-25%',
            img: '../../media/weather_icons/cloudy.svg'
        },
        {
            id: 802,
            description: 'scattered clouds: 25-50%',
            img: '../../media/weather_icons/cloudy.svg'
        },
        {
            id: 803,
            description: 'broken clouds: 51-84%',
            img: '../../media/weather_icons/cloudy.svg'
        },
        {
            id: 804,
            description: 'overcast clouds: 85-100%',
            img: '../../media/weather_icons/cloudy.svg'
        },
    ]
    let img = ''
    const WeatherInfoItem = weatherInfo.map(item => {
        if (ikonID === item.id) {
            if (item.id === 800 && timeOfDay === 'n') {
                img = item.n
                return img
            } else {
                img = item.img
                return img
            }
        }
    } )

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
        <div className="weather-info-container data">
            <h2>{name}<img src={img.slice(11)} alt="icon"/></h2>
        </div> }
        </>
    )

    const errorMSG = (
        <p>{cod} {message}</p>
    )

    return(
        <ServiceGetWeatherContextProvider>
            {console.log(errorMessage)}
            {errorMessage ? errorMSG : null || data ? weather : info}
            
            
        </ServiceGetWeatherContextProvider>
    )

}

export default GetWeatherInfo


