import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Layout from './layout/Layout'
import Home from './pages/Home'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",element:<Layout/>,
      children:[
        {path:"/home",element:<Home/>}
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
