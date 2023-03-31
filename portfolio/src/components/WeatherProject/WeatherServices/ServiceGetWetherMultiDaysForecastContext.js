import React, { createContext, useState, useEffect } from "react";

const API_KEYS = {
    API_KEY_WEATHER: 'e2b8f759c9eb1a5eb0e514633411504f'
}

export const ServiceGetWetherMultiDaysForecastContext = createContext()

export const ServiceGetWetherMultiDaysForecastProvider = ({children}) => {

    const [data, setData] = useState('')
    const [test, setTest] = useState('Test')

    useEffect(() => {
        const x = () => {
            const request = (fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?q=warszawa&appid=3b5661decccb1dc604a11045ee8b9552'))
        request.then(body => body.json())
            .then(req => {
                 setData(() => req)
                //  console.log(data)
            })
        }
        x()
    }, [])

    return (
        <ServiceGetWetherMultiDaysForecastContext.Provider  value={{test}}>
            {children}
        </ServiceGetWetherMultiDaysForecastContext.Provider>
    )
}