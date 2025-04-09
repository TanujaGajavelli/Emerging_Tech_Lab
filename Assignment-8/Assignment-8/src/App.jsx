import React from 'react'
import Layout from './layout/Layout'
import Button from './pages/Button'
import Password from './pages/Password'
import API from './pages/API'
import TODO from './pages/TODO'
import Login from './pages/UserGreeting'
import ThemeSwitch from './pages/ThemeSwitch'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import PersonDetails from './pages/PersonDetails'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
          {path:'person',element:<PersonDetails/>},
          {path:'display-msg',element:<Button/>},
          {path:'password',element:<Password/>},
          {path:'api',element:<API/>},
          {path:'todo',element:<TODO/>},
          {path:'login',element:<Login/>},
          {path:'light',element:<ThemeSwitch/>}
        ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
