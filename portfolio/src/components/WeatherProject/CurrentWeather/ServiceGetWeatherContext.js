import React, { createContext, useState, useContext } from "react";

const API_KEYS = {
    API_KEY_WEATHER: 'e2b8f759c9eb1a5eb0e514633411504f',
    API_KEY_AGROMONITORING: '14b7a5d07f303ffa07da4e96f2900de7',
}

export const ServiceGetWeatherContext = createContext()

export const ServiceGetWeatherContextProvider = ({ children }) => {

    const [city, setCity] = useState('')
    const [data, setData] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(true)
    const [errorMessage, setErrorMessage] =useState(false)
    const [selectValue, setSelectValueParams] = useState('')
    const [x, setX] =useState('')

    const handleChangeUnit = e => {
        if ( e.target.value === 'celsius' ) {
            setSelectValueParams('&units=metric')
        } else if ( e.target.value === 'fahrenheit' ) {
            setSelectValueParams('&units=imperial')
        } else if ( e.target.value === 'kelvin' ) {
            setSelectValueParams('')
        }
    }

    const API_KEY = API_KEYS.API_KEY_WEATHER

    const handeCityName = e => setCity(e.target.value)
    const URL_GET_WEATHER =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${selectValue}&lang=en`

    const request = e => {
        setErrorMessage(false);
        setLoader(true)
        e.preventDefault()
            const response = (fetch(URL_GET_WEATHER))
            response.then(response => response.json())
            .then(req => {
                setData(() => req)
                setTimeOfDay(req.weather[0].icon.slice(2,3))
                setLoader(false)
            })
            .catch(err => {
                setErrorMessage(true);
                setMessage('city not found')
                setLoader(false)
             });
    }
    
    return (
        <ServiceGetWeatherContext.Provider  value={{
            handeCityName, request, data, 
            timeOfDay, loader, errorMessage, message, 
            handleChangeUnit, selectValue,
            }}>
            {children}
        </ServiceGetWeatherContext.Provider>
    )
}