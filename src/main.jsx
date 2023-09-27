import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Componests/Root/Root.jsx'
import Home from './Componests/Home/Home.jsx'
import Donation from './Componests/Donation/Donation.jsx'
import Statistics from './Componests/Statistics/Statistics.jsx'
import CardInfo from './Componests/CardInfo/CardInfo.jsx'
import ErroPage from './Componests/ErrorPage/ErroPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErroPage></ErroPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
    {
      path:"/donations",
      element:<Donation></Donation>
    },
    {
      path:"/statistics",
      element:<Statistics></Statistics>
    },
    {
      path:"/cardInfo/:id",
      element:<CardInfo></CardInfo>,
      loader:()=>fetch('/data.json')
    }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
