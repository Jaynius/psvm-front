import './Login.css'
import mypic from './about-pic.png'
function Login(){
    return(
        <>
          <div className="login-container">
      <div className="left-div">
        {/* Replace the image source with your own */}
        <img src={mypic} alt="Placeholder" />
      </div>
      <div className="right-div">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Sign In</button>
          <button>Sign up</button>
          <a href="#"> forgot password</a>
        </form>
      </div>
    </div>
        </>
    )
}
export default Login;