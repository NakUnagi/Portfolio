import React, { useContext, useState } from "react";
import {ServiceGetWeatherContextProvider} from './ServiceGetWeatherContext'
import { ServiceGetWeatherContext } from './ServiceGetWeatherContext'
import GetWeatherInfo from './GetWeatherInfo'


const SearchCity = () => {

    const { handeCityName, request, data } = useContext(ServiceGetWeatherContext)

    return (
        <>
            <div className="row p-15-0">
                <div className="d-lg-flex">
                    <div className="col-md-4">
                        <ServiceGetWeatherContextProvider>
                            <form className="searchCityForm">
                                <div className="form-group">
                                    <label htmlFor="searchCity">What city would you like to visit?</label>
                                    <input 
                                    type="text" 
                                    className="form-control mr-top-15" 
                                    id="searchCity" 
                                    aria-describedby="searchCity" 
                                    placeholder="Enter city" 
                                    onChange={handeCityName}
                                    />
                                </div>
                                <button type="submit" className="mr-15-0 btn btn-dark dark-btn-mode" onClick={request}>Search</button>
                            </form>
                        {data && console.log(data)}
                        </ServiceGetWeatherContextProvider>
                    </div>
                    <div className="border-line"></div>
                    <div className="col-md-8 als-center">
                        <GetWeatherInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCity