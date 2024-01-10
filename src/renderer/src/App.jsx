import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Model1 from './pages/model1.jsx'
import './style/app.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/model1",
      element: <Model1 />
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;