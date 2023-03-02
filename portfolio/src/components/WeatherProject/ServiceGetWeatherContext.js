import React, { createContext, useState } from "react";

const data1 = {
    API_KEY_WEATHER: 'e2b8f759c9eb1a5eb0e514633411504f',
    API_KEY_AGROMONITORING: '14b7a5d07f303ffa07da4e96f2900de7',
    // cityName: 'TESTCITY',
    // searchData: {}
}

export const ServiceGetWeatherContext = createContext()

export const ServiceGetWeatherContextProvider = ({ children }) => {

    const [data, setData] = useState('')

    const API_KEY = data1.API_KEY_WEATHER

    const [city, setCity] = useState('')

    const handeCityName = e => setCity(e.target.value)
    const URL_GET_WEATHER =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    const request = e => {
        e.preventDefault()
            const response = (fetch(URL_GET_WEATHER))
            response.then(response => response.json())
            .then(req => {
                setData(() => req)
            })
    }
    return (
        <ServiceGetWeatherContext.Provider  value={{city, handeCityName, request, data}}>
            {children}
        </ServiceGetWeatherContext.Provider>
    )
}