import React, { createContext, useContext, useState } from "react";
import {ServiceGetWeatherContext} from './ServiceGetWeatherContext'

const API_KEYS = {
    API_KEY_AGROMONITORING: '14b7a5d07f303ffa07da4e96f2900de7'
}

export const ServiceMultiWeatherForecastContext = createContext()

export const ServiceMultiWeatherForecastContextProvider = ({ children }) => {
    const { lat, long, selectValue } = useContext(ServiceGetWeatherContext)
    const [bodyRequest, setBodyRequest] = useState('')
    const [timeOfDay2, setTimeOfDay2] = useState('')


    const API_KEY = API_KEYS.API_KEY_AGROMONITORING
    const URL = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}${selectValue}`

    const req = () => {
        const request = (fetch(URL))
        request.then(res => res.json())
            .then(body => {
                setBodyRequest(() => body)
                console.log(body)
                body.forEach(el => {
                    setTimeOfDay2(el.weather[0].icon.slice(2,3))
                })
            })
            .catch(err => {
                console.log(err)
             });
    }
    return (
        <ServiceMultiWeatherForecastContext.Provider value={{req, bodyRequest, timeOfDay2}}>
            {children}
            {/* {console.log(bodyRequest)} */}
        </ServiceMultiWeatherForecastContext.Provider>
    )
}