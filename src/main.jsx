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
import DriverLogin from './Drivers/DriverLogin';
import DriverProfile from './Drivers/DriverProfile';
import DriverSignup from './Drivers/DriverSignup';
import ConductorLogin from './conductors/ConductorLogin';
import InspectorLogin from './Inspections/InspectorLogin';
import InspectorSignup from './Inspections/InspectorSignup';
import VehicleOwners from './vehicleOwner/VehicleOwner';
import VehicleOwner from './vehicleOwner/VehicleOwner';
import Ownerlogin from './vehicleOwner/OwnerLogin';
import Ownersignup from './vehicleOwner/OwnerSignup';
import Landing from './landing/Landing';

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
      },
      {
        path:'/driverlogin',
        element:<DriverLogin/>,

      },
      {
        path:'/driverprofile',
        element:<DriverProfile/>,
      },
      {
        path:'/driversign-up',
        element:<DriverSignup/>
      },
      {
        path:'/conductorlogin',
        element:<ConductorLogin/>,
      },
      {
        path:'/inspectorlogin',
        element:<InspectorLogin/>,
      },
      {
        path:'/inspectorsignup',
        element:<InspectorSignup/>,
      },
      {
        path:'/ownerlogin',
        element:<Ownerlogin/>,
      },
      {
        path:"/ownersignup",
        element:<Ownersignup/>,
      },
      {
        path:'/ownerdashboard',
        element:<VehicleOwner/>,
      },
      {
        path:'',
        element:<Landing/>}

    ],
    
    
  },
 
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
