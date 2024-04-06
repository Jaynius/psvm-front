import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
function Landing() {
    return (
       <div className="landing-container">
        <div className="landing-content-holder">
        <div className="landing-content">
                <h1>Welcome to the Vehicle Inspection Management System</h1>
                <p>Register as a vehicle owner, inspector or conductor</p>
                <Link className='get-started' to="/dashboard">get started</Link>

              </div>

        </div>
            
       </div>
 
    );
}

export default Landing;