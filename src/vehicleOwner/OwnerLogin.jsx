import './vehicleOwner.css'

function OwnerLogin(){
    return(
        <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
          <button>sign up</button>
          <a href="#">forgot password?</a>
          
        </form>
      </div>
    );
  };


export default OwnerLogin;