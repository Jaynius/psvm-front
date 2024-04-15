import './Dashboard.css'
import vehicle from './vehicles.jpeg'

function Dashboard(){
    return(

        <div className="dashboard-container">
            <div className="card-container">
                <div className="vehicles-card">
                  
                    <title>vehicles</title>
                    <h1>Vehicles:</h1>
                   
                    
                    <p>{}</p>
                    
                </div>
                <div className="commuters-card">
                   
                    <title>Drivers</title>
                    <h1>commuter</h1>
                    <p>Total commuters</p>
                    
                </div>
                <div className="drivers-card">
                    <title>Drivers:</title>
                    <h1>Drivers</h1>
                    <p>Total Drivers</p>
                    
                </div>
                <div className="conductors-card">
                    <img src="" alt="conductors" />
                    <h1>Conductors</h1>
                    <title>conductors</title>
                    <p>Total conductors</p>
                    
                </div>
                
            </div>
            <div className="dashboard-search-container">
                <input type="text" placeholder=' vehicle registration ' />
                <button>search</button>
            </div>
            <div className="details-container">
                <h2>Vehicle Details</h2>
                <div className="details-list">
                    <ol>
                        <li></li>
                    </ol>
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
