import React, { useContext } from "react";
import {ServiceGetWeatherContextProvider, 
    ServiceGetWeatherContext} from '../WeatherServices/ServiceGetWeatherContext'
import GetWeatherInfo from './GetWeatherInfo'

import '../../../components/drop-down.scss'


const SearchCity =  () => {

    const { 
        handeCityName, request, data, errorMessage, 
        loader, handleChangeUnit, 
    } = useContext(ServiceGetWeatherContext)

    const handleValue = e => {
        e.preventDefault()
        ()
        console.log(e.target.value)
    }

    return (
        <>
            <div className="row p-15-0">
                <div className="d-lg-flex">
                <div className={`col-lg-8 rwd-flex-center als-center ${loader && 'txt-align-center'}`}>
                        <GetWeatherInfo />
                    </div>  
                    <div className="col-lg-4">
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
                                    <div className="drop-down units mr-top-15">
                                    <button disabled>UNIT</button>
                                    <div className="drop-down-list">
                                        <button onClick={handleChangeUnit} value="celsius">Celsius</button>
                                        <button onClick={handleChangeUnit} value="fahrenheit">Fahrenheit</button>
                                        <button onClick={handleChangeUnit} value="kelvin">Kelvin</button>
                                    </div>
                                </div>
                                </div>
                                <button id="myForm" type="submit" className="mr-15-0 btn btn-mode" onClick={request}>Search</button>
                            </form>
                        </ServiceGetWeatherContextProvider>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SearchCity