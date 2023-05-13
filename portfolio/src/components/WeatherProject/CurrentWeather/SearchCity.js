import React, { useContext, useState } from "react";
import {ServiceGetWeatherContextProvider, 
    ServiceGetWeatherContext} from '../WeatherServices/ServiceGetWeatherContext'
import GetWeatherInfo from './GetWeatherInfo'

import '../../../components/drop-down.scss'


const SearchCity =  () => {

    const [unitsValue, setUnitsValue] = useState('Celsius')

    const { 
        handeCityName, request, 
        loader, handleChangeUnit, 
    } = useContext(ServiceGetWeatherContext)

    const handleValue = e => {
        e.preventDefault()
        setUnitsValue(e.target.value)
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
                                    <div className="drop-down mr-top-15">
                                        <input 
                                        readOnly="readonly"
                                        className="form-control" 
                                        value={unitsValue}/>
                                        <div className="drop-down-list">
                                            <button className="option-element" onClick={(e) => {handleChangeUnit(e); handleValue(e);}} value="Celsius">Celsius</button>
                                            <button className="option-element" onClick={(e) => {handleChangeUnit(e); handleValue(e);}} value="Fahrenheit">Fahrenheit</button>
                                            <button className="option-element" onClick={(e) => {handleChangeUnit(e); handleValue(e);}} value="Kelvin">Kelvin</button>
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