import React, { createContext, useContext, useEffect, useState } from "react";
import { ServiceGetWeatherContext } from '../WeatherServices/ServiceGetWeatherContext'
import './weatherTemplate.scss'

export const WeatherInfoTemplateContext = createContext()

export const WeatherInfoTemplateContextProvioder = ({children}) => {

    const { 
        date, time12, data
    } = useContext(ServiceGetWeatherContext)

    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [PM_AM, setPM_AM] = useState()
    const [timeArray, setTimeArray] = useState()

    const setData2 = () => {
        setYear(date.slice(0,4))
        setMonth(date.slice(5,7))
        setDay(date.slice(8,10))
        setPM_AM(time12.slice(9,11).split(':'))
        setTimeArray(time12.slice(0,8).split(':'))
    }

    useEffect(() => {
    setData2()
    }, [data, date])

    return (
        <WeatherInfoTemplateContext.Provider 
        value={{ year, month, day, PM_AM, timeArray, setData2, }}
        >
            {children}            
            {/* {console.log(`tempUnitTransform ${tempUnitTransform}`)}
            {console.log(`year ${year}`)}
            {console.log(`month ${month}`)}
            {console.log(`day ${day}`)}
            {console.log(`tempUnit ${tempUnit}`)}
            {console.log(`PM_AM ${PM_AM}`)}
            {console.log(`timeArray ${timeArray}`)} */}
        </WeatherInfoTemplateContext.Provider>
    )

}
