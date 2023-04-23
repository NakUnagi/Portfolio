import React from 'react'
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './PortfolioStartPage.scss'
import Nav from './Nav'

const PortfolioStartPage = () => {
    return (
        <>
            <Nav />
            <main>
                <section id="section-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PortfolioStartPage