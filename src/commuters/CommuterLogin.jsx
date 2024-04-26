import { Link } from 'react-router-dom';
import mypic from './commuters.jpeg'
// import { useEffect } from 'react';
function CommuterLogin(){

  // const [user,setUser]=useEffect([]);
  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const idNumber = document.getElementById('idNumber').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await axios.post('http://localhost:8080/users/login', { idNumber, password });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Login failed:', error.response.data); // Handle error response
    }
  };

    return(
        <>
        <div className="container">
          <div className="login-container">
      <div className="left-div">
        {/* Replace the image source with your own */}
        <img src={mypic} alt="Placeholder" />
      </div>
      <div className="right-div">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>commuter Login</h2>
          <div className="form-group">
            <label htmlFor="username">Id number:</label>
            <input type="text" id="idNumber" name="idNumber" placeholder='enter national id number'/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="button-container">
          <Link className='button'to='/profile' type="submit">Sign In</Link>
          <Link className='button' to="/sign-up">Sign up</Link>
          </div>
          
          <Link href="#"> forgot password</Link>
        </form>
      </div>
    </div>
    </div>
        </>
    )
}
export default CommuterLogin;