import React, { createContext, useEffect, useState } from "react";

const API_KEYS = {
    API_KEY_AGROMONITORING: '14b7a5d07f303ffa07da4e96f2900de7'
}

export const ServiceMultiWeatherForecastContext = createContext()

export const ServiceMultiWeatherForecastContextProvider = ({ children }) => {

    const [bodyRequest, setBodyRequest] = useState('')

    const API_KEY = API_KEYS.API_KEY_AGROMONITORING
    const URL = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=35&lon=139&appid=${API_KEY}`

    const req = () => {
        const request = (fetch(URL))
        request.then(res => res.json())
            .then(body => {
                setBodyRequest(() => body)
                console.log(body)
            })
            .catch(err => {
                console.log(err)
             });
    }
    return (
        <ServiceMultiWeatherForecastContext.Provider value={{req, bodyRequest}}>
            {children}
        </ServiceMultiWeatherForecastContext.Provider>
    )
}