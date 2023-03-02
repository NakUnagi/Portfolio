import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <>
        
        ErrorPage
        </>
    )
}

export default ErrorPage