import './Login.css'
function InspectorSignup(){
    return (
        <div className="signup-container">
            <div className="lleft-div">
                <h2>hello world</h2>
            </div>
            <div className="signup-form">
                <h2> Inspector signup</h2> 
                <form action="" method="post">
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
                    <button className='back-button'>back</button><br />

                </form>

            </div>
        </div>
    )
}
export default InspectorSignup;