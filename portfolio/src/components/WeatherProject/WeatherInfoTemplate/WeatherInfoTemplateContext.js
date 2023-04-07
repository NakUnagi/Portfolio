import React, { createContext, useContext, useEffect, useState } from "react";
import { ServiceGetWeatherContext } from '../WeatherServices/ServiceGetWeatherContext'

import './weatherTemplate.scss'

export const WeatherInfoTemplateContext = createContext()

export const WeatherInfoTemplateContextProvioder = ({children}) => {

    const { 
        date, selectValue, time12
    } = useContext(ServiceGetWeatherContext)

    const tempUnit = () => {
        if (selectValue === '') {
            return <span>&#8490;</span>
        } else if (selectValue === '&units=imperial') {
            return <span>&#x2109;</span>
        } else if (selectValue === '&units=metric') {
            return <span>&#x2103;</span>
        }
    }

    const [tempUnitTransform, setTempUnitTransform] = useState()
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [PM_AM, setPM_AM] = useState()
    const [timeArray, setTimeArray] = useState()

    const setData2 = () => {
        setTempUnitTransform(tempUnit().props.children !== 'K' ? <sup>{tempUnit()}</sup> :  tempUnit())
        setYear(date.slice(0,4))
        setMonth(date.slice(5,7))
        setDay(date.slice(8,10))
        setPM_AM(time12.slice(9,11).split(':'))
        setTimeArray(time12.slice(0,8).split(':'))
    }

    useEffect(() => {
    //     setTempUnitTransform(tempUnit().props.children !== 'K' ? <sup>{tempUnit()}</sup> :  tempUnit())
    //     setYear(date.slice(0,4))
    //     setMonth(date.slice(5,7))
    //     setDay(date.slice(8,10))
    //     setPM_AM(time12.slice(9,11).split(':'))
    //     setTimeArray(time12.slice(0,8).split(':'))
    setData2()
    }, [date])

    return (
        <WeatherInfoTemplateContext.Provider 
        value={{ tempUnitTransform, year, month, day, tempUnit, PM_AM, timeArray, setData2 }}
        >
            {children}
            {console.log(`tempUnitTransform ${tempUnitTransform}`)}
            {console.log(`year ${year}`)}
            {console.log(`month ${month}`)}
            {console.log(`day ${day}`)}
            {console.log(`tempUnit ${tempUnit}`)}
            {console.log(`PM_AM ${PM_AM}`)}
            {console.log(`timeArray ${timeArray}`)}
        </WeatherInfoTemplateContext.Provider>
    )

}
