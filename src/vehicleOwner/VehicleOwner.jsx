import './vehicleOwner.css';
function VehicleOwner(){
    return (
        <>
        <div className="vehicle-owner-container">
            <div className="header">
                <div className="vehicles">
                    <h2>vehicles: </h2>
                <button classnName="header-link" >profile</button>
                </div>
                <div className="drivers">
                    <h2>Drivers: </h2>
                <button classnName="header-link" >vehicle operation</button>
                </div>
                <div className="conductors">
                    <h2>Conductors:</h2>
                <button classnName="header-link" >profile</button>

                </div>
            </div>

            <div className="body-container">
                <div className="body-details">
                    <h2>details</h2>

                </div>
                <div className="profile">
                    <h2>profile</h2>
                    <label htmlFor="">id number: </label>
                    <label htmlFor=""> name:</label><br />
                    <label htmlFor="">contact:</label><br />
                    <label htmlFor="">email</label>
                </div>
                
                
                
                
            </div>
            </div>
        </>
    )
}

export default VehicleOwner;