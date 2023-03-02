import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import PortfolioStartPage from './components/Portfolio/PortfolioStartPage';
import MainWeather from './components/WeatherProject/Main'
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioStartPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "weather",
    element: <MainWeather />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);