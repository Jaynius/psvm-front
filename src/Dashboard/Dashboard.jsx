import { useEffect, useState } from 'react';
import './Dashboard.css'
import vehicle from './vehicles.jpeg'
import axios from 'axios';


function Dashboard(){

    const [driverCount, setDriverCount] = useState(0);
    const [conductorCount, setConductorCount] = useState(0);
    const [commuterCount, setCommuterCount] = useState(0);
    const [vehicleCount,setVehiclecount]=useState(0);
    const [vehicles,setVehicles]=useState([]);
    useEffect(() => {
        const fetchDriverCount = async () => {
          try {
            const response = await axios.get('http://localhost:8080/vehicles/count');
            setDriverCount(response.data);
          } catch (error) {
            console.error('Error fetching driver count:', error);
          }
        };
    
        const fetchConductorCount = async () => {
          try {
            const response = await axios.get('http://localhost:8080/conductors/count');
            setConductorCount(response.data);
          } catch (error) {
            console.error('Error fetching conductor count:', error);
          }
        };
    
        const fetchCommuterCount = async () => {
          try {
            const response = await axios.get('http://localhost:8080/users/count');
            setCommuterCount(response.data);
          } catch (error) {
            console.error('Error fetching commuter count:', error);
          }
        };

        const fetchVehicleCount=async ()=>{
            try{
                const response= await axios.get('http://localhost:8080/vehicles/count')
                setVehiclecount(response.data)
            }catch(error){
                console.error('error fetching commuter vehicle count:  ',error)
            }
        };
        
        const fetchVehicles=async()=>{
          try {
            const response= await axios.get('http://localhost:8080/vehicles/all')
            setVehicles(response.data)

            
          } catch (error) {
            console.error('error fetching vehicles: ',error)
          };
        }
    
        fetchDriverCount();
        fetchConductorCount();
        fetchCommuterCount();
        fetchVehicleCount();
        fetchVehicles();
      }, []);
    

    return(

        <div className="dashboard-container">
            <div className="card-container">
                <div className="vehicles-card">
                  
                    <title>vehicles</title>
                    <h1>{vehicleCount}</h1>
                    <p>Total vehicles </p>
                    
                </div>
                <div className="commuters-card">
                   
                    <title>Drivers</title>
                    <h1>{commuterCount}</h1>
                    <p>Total commuters</p>
                    
                </div>
                <div className="drivers-card">
                    <title>Drivers</title>
                    <h1>{driverCount}</h1>
                    <p>Total Drivers</p>
                    
                </div>
                <div className="conductors-card">
                    <h1> {conductorCount}</h1>
                    <title>conductors</title>
                    <p>Total conductors</p>
                    
                </div>
                
            </div>
           
            <div className="details-container">
                <h2>Vehicle List</h2>
                <div className="details-list">
                    <table>
                        <thead>
                        <th>Registration number</th>
                        <th>Brand</th>
                        <th>seat Capacity</th>
                        <th>Driver</th>
                        <th>conductor</th>
                            
                        </thead>
                        <tbody>
                        {vehicles.map(item => (
            <tr key={item.id}>
              <td>{item.registrationNumber}</td>
              <td>{item.brand}</td>
              <td>{item.seatCapacity}</td>
              {/* <td>{item.driver.name}</td> */}
              {/* <td>{item.conductor.name}</td> */}
              {/* Add more table cells as needed */}
            </tr>
          ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    

    

    )
}

export default Dashboard;


//     import Axiosconnect from '../Axiosconnect';
// import './Dashboard.css'
//     import vehicle from './vehicles.jpeg'
//     import React, { useState, useEffect } from 'react';
 


//     function Dashboard() {
//         const [vehicles, setVehicles] = useState([]);
//         const [drivers, setDrivers] = useState([]);
//         const [conductors, setConductors] = useState([]);

//         useEffect(() => {
//             // Fetch data from the database and update the state variables
//             // Example code using axios:
//             Axiosconnect.get('/vehicles/count')
//                 .then(response => setVehicles(response.data))
//                 .catch(error => console.log(error));

//            Axiosconnect.get('/api/drivers')
//                 .then(response => setDrivers(response.data))
//                 .catch(error => console.log(error));

//             axios.get('/api/conductors')
//                 .then(response => setConductors(response.data))
//                 .catch(error => console.log(error));
//         }, []);

//         return (
//             <div className="dashboard-container">
//                 <div className="card-container">
//                     <div className="vehicles-card">
//                         <title>vehicles</title>
//                         <h1>Vehicles: {vehicles.length}</h1>
//                         <p>{/* Display additional vehicle data here */}</p>
//                     </div>
//                     <div className="commuters-card">
//                         <title>Drivers</title>
//                         <h1>commuter</h1>
//                         <p>Total commuters</p>
//                     </div>
//                     <div className="drivers-card">
//                         <title>Drivers: {drivers.length}</title>
//                         <h1>Drivers</h1>
//                         <p>Total Drivers</p>
//                     </div>
//                     <div className="conductors-card">
//                         <img src="" alt="conductors" />
//                         <h1>Conductors</h1>
//                         <title>conductors</title>
//                         <p>Total conductors</p>
//                     </div>
//                 </div>
//                 <div className="dashboard-search-container">
//                     <input type="text" placeholder="vehicle registration" />
//                     <button>search</button>
//                 </div>
//                 <div className="details-container">
//                     <h2>Vehicle Details</h2>
//                     <div className="details-list">
//                         <ol>
//                             {/* {vehicles.map(vehicle => (
//                                 <li key={vehicle.id}>{vehicle.name}</li>
//                             ))} */}
//                         </ol>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     export default Dashboard;
