import { Link } from 'react-router-dom';
import './Login.css'
import mypic from './about-pic.png'
function DriverLogin(){
    return(
        <>
          <div className="login-container">
      <div className="left-div">
        {/* Replace the image source with your own */}
        <img src={mypic} alt="Placeholder" />
      </div>
      <div className="right-div">
        <form className="login-form">
          <h2>Driver Login</h2>
          <div className="form-group">
            <label htmlFor="username">Id number:</label>
            <input type="text" id="idNumber" name="idNumber" placeholder='enter national id number'/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="button-container">
          <Link className='button'to='/driverprofile' type="submit">Sign In</Link>
          <Link className='button' to="/driversign-up">Sign up</Link>
          </div>
          
          <Link href="#"> forgot password</Link>
        </form>
      </div>
    </div>
        </>
    )
}
export default DriverLogin;