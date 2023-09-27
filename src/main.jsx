import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Education from './Components/Education/Education';
import Programming from './Components/Programming/Programming';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: 'header',
        element: <Header/>
      },
      {
        path: 'education',
        element: <Education/>
      },
      {
        path: 'programming',
        element: <Programming/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
