import { Outlet, Route, Router, Routes, createBrowserRouter ,Link } from 'react-router-dom';
import './Commuter.css';
import CommuterSignup from './CommuterSignup';
function Commuters(){
 
   
    return(
        <div className="commuter-container">
            <div className="commuter-header">
                < Link to='sign-up'>create profile</ Link >
                < Link to='profile'>view profile</ Link >
                < Link to='update'>update profile</ Link >
                < Link to='delete'>delete profile</ Link >
            </div>
           <Outlet/>
        </div>
    // 
    // <h2>heloo world</h2>
    )
    
    
}

export default Commuters;