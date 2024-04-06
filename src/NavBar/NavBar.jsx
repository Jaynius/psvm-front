
import { Link, Outlet } from "react-router-dom";
import './Navbar.css'
function NavBar(){

    function handleExitButtonClick(){
        const confirmExit = window.confirm('Are you sure you want to exit?');
        if (confirmExit) {
          // Close the application
          window.close();
        }
      }
      
    return(
        <div className="App">
        <div className="sidebar">
          <div className="header-text">
          <h2>PSV safety management system</h2>
          </div>
          <div className="header-buttons">
         
        <Link className="nav-link" to='/dashboard'>Dashboard</Link>
        <Link className="nav-link" to='/commuterlogin'>Commuters</Link>
          <Link className="nav-link"  to='/driverlogin'>Drivers</Link>
          <Link className="nav-link" to="/conductorlogin">Conductors</Link>
          <Link className="nav-link" to="/inspectorlogin">Inspections</Link>
          <Link className="nav-link" to='/ownerlogin'>Vehicle Owners</Link>
          <button className="nav-link"onClick={() => handleExitButtonClick()}>Exit</button>
          </div>
        </div>
       <Outlet/>
      </div>
    )
}
export default NavBar;