import APICall from "./pages/APICall"
import ApiCallTwo from "./pages/ApiCallTwo"
import Layout from "./layout/Layout"
import Second from "./pages/Second"
import First from "./pages/first"
import Calculator from "./pages/Calculator"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
// function App() {
//   return (
//     //fragment tag
//     <>
//       {/* {first()} */}
//       <APICall/>
//     </>
//     //diffing-algorithm used to check nodes
//     //reconsilation
//     //v-dom
//   )
// }
function App(){
    const router=createBrowserRouter([
      {
        path:"/",
        element:<Layout/>,
        children:[
          {path:"/",element:<First/>},
          {path:"/api",element:<APICall/>},
          {path:"/api2",element:<ApiCallTwo/>},
          {path:"/calc",element:<Calculator/>},
          {path:"/second",element:<Second/>}
        ]
      }
    ])
    return <RouterProvider router={router}/>
}
export default App;
