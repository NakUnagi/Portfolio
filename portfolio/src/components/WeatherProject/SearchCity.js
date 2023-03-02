import React, { useContext, useState } from "react";
import {ServiceGetWeatherContextProvider} from './ServiceGetWeatherContext'
import { ServiceGetWeatherContext } from './ServiceGetWeatherContext'
import CityResult from './CityResult'


const SearchCity = (props) => {

    // const [data, setData] = useState({})
    const { handeCityName, request, data } = useContext(ServiceGetWeatherContext)

    // const API_KEY = ServiceGetWeatherContext.Consumer._currentValue2.API_KEY_WEATHER

    // const URL_GET_WEATHER =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    // const request = e => {
    //     e.preventDefault()
    //         const response = (fetch(URL_GET_WEATHER))
    //         response.then(response => response.json())
    //         .then(req => {
    //             setData(() => req)
    //         })
    // }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <ServiceGetWeatherContextProvider>
                    <form>
                        <div className="form-group">
                            <label htmlFor="searchCity">What city would you like to visit?</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="searchCity" 
                            aria-describedby="searchCity" 
                            placeholder="Enter city" 
                            onChange={handeCityName}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={request}>Search</button>
                    </form>
                    {data && console.log(data)}
                    </ServiceGetWeatherContextProvider>
                    {/* <ServiceGetWeatherContext.Provider value={{data}}>
                        <CityResult />
                    </ServiceGetWeatherContext.Provider> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCity