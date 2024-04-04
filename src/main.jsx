import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import Dashboard from './Dashboard/Dashboard';
import Commuters from './commuters/Commuters';
import CommuterSignup from './commuters/CommuterSignup';
import CommuterLogin from './commuters/CommuterLogin';
import CommuterProfile from './commuters/CommuterProfile';

const router=createBrowserRouter([
  {
    path:'/',
    element:<NavBar/>,
    children:[

      {
        path:'/dashboard',
        element:<Dashboard/>,
      },
   
      {
        path:'/commuterlogin',
        element:<CommuterLogin/>,
       
      },
      {
        path:'/sign-up',
        element:<CommuterSignup/>
      },
      {
        path:'profile',
        element:<CommuterProfile/>
      }

    ],
    
    
  },
  
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
