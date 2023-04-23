import React, { createContext, useState, useEffect } from "react";

const API_KEYS = {
    API_KEY_WEATHER: 'e2b8f759c9eb1a5eb0e514633411504f',
}

export const ServiceGetWeatherContext = createContext()

export const ServiceGetWeatherContextProvider = ({ children }) => {

    const [city, setCity] = useState('')
    const [data, setData] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(true)
    const [errorMessage, setErrorMessage] =useState(false)
    const [selectValue, setSelectValueParams] = useState('&units=metric')
    const [timeZone, setTimeZone] = useState('')
    const [time12, setTime12] = useState('')
    const [mainTemp, setMainTemp] = useState('')
    const [mainFeelsLike, setMainFeelsLike] = useState('')
    const [currentDay, setCurrentDay] = useState('')
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [PM_AM, setPM_AM] = useState()
    const [timeArray, setTimeArray] = useState()
    
    const API_KEY_TIMEZONE = '5abb4a24dd7c4efc8e76d4bd61113f71'

    const lat = data && data.coord.lat
    const long = data && data.coord.lon

    const handleChangeUnit = e => {
        e.preventDefault()

        if ( e.target.value === 'celsius' ) {
            setSelectValueParams('&units=metric')
        } else if ( e.target.value === 'fahrenheit' ) {
            setSelectValueParams('&units=imperial')
        } else if ( e.target.value === 'kelvin' ) {
            setSelectValueParams('')
        }
        if(data) {
            setTimeout(() => document.getElementById("myForm").click(), 1)
            setTimeout(() => document.getElementById("multi").click(), 1)
        }
    }

    const API_KEY = API_KEYS.API_KEY_WEATHER
    const test = 'cad32c121fd545dc87bafc7f00e9cf9c'
    const test2 = '7e169e0cdb0f4a56897795d6f40edb28'

    const handeCityName = e => setCity(e.target.value)
    const URL_GET_WEATHER =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${selectValue}&lang=en`

    const request = e => {
        setErrorMessage(false);
        setLoader(true)
        if (e) {
            e.preventDefault()
        }
            const response = (fetch(URL_GET_WEATHER))
            response.then(response => response.json())
            .then(req => {
                setData(() => req)
                setTimeOfDay(req.weather[0].icon.slice(2,3))
                setMainTemp(req.main.temp)
                setMainFeelsLike(req.main.feels_like)
                setLoader(false)
            })
            .catch(err => {
                setErrorMessage(true);
                setMessage('city not found')
                setLoader(false)
             });
    }

    const getTimeZoneName = (lat, long) => {
        const req = (fetch(`https://api.ipgeolocation.io/timezone?apiKey=${API_KEY_TIMEZONE}&lat=${lat}&long=${long}`))
        // const req = (fetch(`https://api.ipgeolocation.io/timezone?apiKey=${test2}&lat=${lat}&long=${long}`))
        req.then(data => data.json())
        .then(body => {
            setTimeZone(() => body.timezone) 
            setYear(body.date.slice(0,4))
            setMonth(body.date.slice(5,7))
            setDay(body.date.slice(8,10))
            setPM_AM(() => body.time_12.slice(9,11).split(':'))
            setTimeArray(() => body.time_12.slice(0,8).split(':'))
            setCurrentDay(() => body.date_time_txt.split(',')[0])
        }).catch(err => {
            console.error(err)
            });
        }

    useEffect( () => {
        getTimeZoneName(lat, long)
    }, [data])

    return (
        <ServiceGetWeatherContext.Provider  value={{
            handeCityName, request, data, getTimeZoneName,
            timeOfDay, loader, errorMessage, message, 
            handleChangeUnit, selectValue, timeZone,
            time12, mainTemp, mainFeelsLike,
            currentDay, lat, long,  year, 
            month, day, PM_AM, timeArray,
            }}>
            {children}
        </ServiceGetWeatherContext.Provider>
    )
}