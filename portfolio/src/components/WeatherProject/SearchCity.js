import React, { useContext, useState } from "react";
import {ServiceGetWeatherContextProvider} from './ServiceGetWeatherContext'
import { ServiceGetWeatherContext } from './ServiceGetWeatherContext'
import CityResult from './CityResult'


const SearchCity = () => {

    const { handeCityName, request, data } = useContext(ServiceGetWeatherContext)

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
                        <CityResult />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCity