import './Dashboard.css'

function Dashboard(){
    return(

        <div className="dashboard-container">
            <div className="card-container">
                <div className="vehicles-card">
                    <img src="" alt="vehicles" />
                    <title>vehicles</title>
                    <p>Total vehicles</p>
                    
                </div>
                <div className="drivers-card">
                    <img src="" alt="drivers" />
                    <title>Drivers</title>
                    <p>Total Drivers</p>
                    
                </div>
                <div className="conductors-card">
                    <img src="" alt="conductors" />
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