import React, { createContext, useState } from "react";

const data1 = {
    API_KEY_WEATHER: 'e2b8f759c9eb1a5eb0e514633411504f',
    API_KEY_AGROMONITORING: '14b7a5d07f303ffa07da4e96f2900de7',
}

export const ServiceGetWeatherContext = createContext()

export const ServiceGetWeatherContextProvider = ({ children }) => {

    const [data, setData] = useState('')
    const [ikonID, setIkonID] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [country , setCountry] = useState('')

    const API_KEY = data1.API_KEY_WEATHER

    const [city, setCity] = useState('')
    

    const handeCityName = e => setCity(e.target.value)
    const URL_GET_WEATHER =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=en`

    const request = e => {
        e.preventDefault()
            const response = (fetch(URL_GET_WEATHER))
            response.then(response => response.json())
            .then(req => {
                setData(() => req)
                setIkonID(req.weather[0].id)
                setTimeOfDay(req.weather[0].icon.slice(2,3))
                setDescription(req.weather[0].description)
                setName(req.name)
                setCountry(req.sys.country)
            })
    }
    
    return (
        <ServiceGetWeatherContext.Provider  value={{
            city, handeCityName, request, data, ikonID, timeOfDay,
            description,name, country}}>
            {children}
        </ServiceGetWeatherContext.Provider>
    )
}