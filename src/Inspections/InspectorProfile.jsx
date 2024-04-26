import { Link } from 'react-router-dom'
import './Inspector.css'
function InspectorProfile(){
    return(
        <div className="commuter-contents">
       <div className="commuter-operations">
        <h1>operations</h1>
        <button className='ops-btn'> update profile</button>
        <button className='ops-btn'>delete profile</button>
        <Link className='ops-btn' to='/boarding'> board vehicle</Link>
        <Link className="ops-btn" to='/vehicleInspection' >  inspect a vehicle</Link>
       </div>
        <div className="search-details">
            <h2>Inspector profile</h2>
            <div className="details">
                <label htmlFor="">ID number: </label>
                <label htmlFor="">Name:</label>
                <label htmlFor=""> contacts:</label>
                <label htmlFor="">Email</label>
            </div>

        </div>
    </div>
    )
}

export default InspectorProfile