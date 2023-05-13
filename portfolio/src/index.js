import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import PortfolioStartPage from './components/Portfolio/PortfolioStartPage'
import WeatherPage from './components/WeatherProject/CurrentWeather/WeatherPage'
import ErrorPage from './components/ErrorPage/ErrorPage'
import GameList from './games/GameLIst/GameList'
import TicTacToe from './games/TicTacToe/TicTacToe.js'
import Bird from './games/Bird/Bird'

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
        path: "games",
        element: <GameList />,
      },
      {
        path: "games/tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "games/bird",
        element: <Bird />,
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