import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import PortfolioStartPage from './components/Portfolio/PortfolioStartPage'
import WeatherPage from './components/WeatherProject/CurrentWeather/WeatherPage'
import ErrorPage from './components/ErrorPage/ErrorPage'
import New from './components/WeatherProject/New/New'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioStartPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "weather",
        element: <WeatherPage />,
      },
      {
        path: "new",
        element: <New />,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={ router } />
  // </React.StrictMode>
  <>
    <RouterProvider router={ router } />
  </>
);