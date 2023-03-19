import React, { useContext, useState } from "react";
import {ServiceGetWeatherContextProvider} from './ServiceGetWeatherContext'
import { ServiceGetWeatherContext } from './ServiceGetWeatherContext'
import GetWeatherInfo from './GetWeatherInfo'


const SearchCity =  () => {

    const { 
        handeCityName, request, data, errorMessage, 
        loader, handleChangeUnit, 
    } = useContext(ServiceGetWeatherContext)

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
                                <div className="form-group mr-top-15">
                                    <label>Choice of temperature unit.</label>
                                    <select id="units" className="units form-select form-select-sm mr-top-15" 
                                    aria-label=".form-select-sm units" 
                                    onChange={handleChangeUnit}
                                    defaultValue={'kelvin'}>
                                        <option value="celsius">Celsius</option>
                                        <option value="fahrenheit">Fahrenheit</option>
                                        <option value="kelvin">Kelvin</option>
                                    </select>
                                </div>
                                <button type="submit" className="mr-15-0 btn btn-dark dark-btn-mode" onClick={request}>Search</button>
                            </form>
                        {data && console.log(data)}
                        </ServiceGetWeatherContextProvider>
                    </div>
                    {/* <div className="border-line"></div> */}
                    <div className={`col-md-8 als-center ${loader && 'txt-align-center'} ${data && errorMessage === false ?  'data' : null}`}>
                        <GetWeatherInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCity