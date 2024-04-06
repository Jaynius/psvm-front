import './Dashboard.css'
import vehicle from './vehicles.jpeg'

function Dashboard(){
    return(

        <div className="dashboard-container">
            <div className="card-container">
                <div className="vehicles-card">
               
                   {/* <img src={vehicle} alt="" /> */}
                
                  
                    <title>vehicles</title>
                    <h1>Vehicles</h1>
                   
                    
                    <p>{}</p>
                    
                </div>
                <div className="commuters-card">
                    <img src="" alt="drivers" />
                    <title>Drivers</title>
                    <h1>commuter</h1>
                    <p>Total commuters</p>
                    
                </div>
                <div className="drivers-card">
                    <img src="" alt="drivers" />
                    <title>Drivers</title>
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