import React, { createContext, useState, useContext } from "react";

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
    const [message, setMessage] = useState('')
    const [country , setCountry] = useState('')
    const [loader, setLoader] = useState(true)
    const [errorMessage, setErrorMessage] =useState(false)
    const [selectValue, setSelectValue] = useState('')

    const handleChangeUnit = e => {
        if ( e.target.value === 'celsius' ) {
            setSelectValue('&units=metric')
        } else if ( e.target.value === 'fahrenheit' ) {
            setSelectValue('&units=imperial')
        } else if ( e.target.value === 'kelvin' ) {
            setSelectValue('')
        }
    }

    const API_KEY = data1.API_KEY_WEATHER

    const [city, setCity] = useState('')
    

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
                setIkonID(req.weather[0].id)
                setTimeOfDay(req.weather[0].icon.slice(2,3))
                setDescription(req.weather[0].description)
                setName(req.name)
                setCountry(req.sys.country)
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
            city, handeCityName, request, data, ikonID, timeOfDay,
            description,name, country, loader, errorMessage, message, handleChangeUnit, selectValue
            }}>
            {children}
        </ServiceGetWeatherContext.Provider>
    )
}