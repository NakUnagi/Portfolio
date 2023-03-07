import React, { Component } from 'react'
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './PortfolioStartPage.scss'
import Nav from './Nav'

class PortfolioStartPage extends Component {
    state = {

    }

    render() {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PortfolioStartPage