
function ConductorSignup(){
    return (
        <div className="container">
       

           
             
                <form className='formm' action="" method="post">
                <h2>conductor Signup</h2>
                
                    <label htmlFor="id">National Id</label><br />
                    <input type="text" name="" id="" placeholder="enter national id number" required/><br />
                    <label htmlFor="id">Full Name</label><br />
                    <input type="text" name="" id="" placeholder="enter full name" required/><br />
                    <label htmlFor="id">contacts</label><br />
                    <input type="text" name="" id="" placeholder="enter phone number" required/><br />
                    <label htmlFor="email"> Email</label><br />
                    <input type="email" name="" id="" placeholder="enter email" required/><br />
                    <label htmlFor="">New Password</label><br />
                    <input type="password" name="" id="" required /><br />
                    <label htmlFor="">Confirm new password</label><br />
                    <input type="password" name="" id="" required /><br />
                    <button type="submit">submit</button>
                    <button className='back-button'>back</button>
                </form>
                </div>

          

         
    )
}
export default ConductorSignup;