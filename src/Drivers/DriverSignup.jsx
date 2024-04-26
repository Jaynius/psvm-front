import {useState} from 'react';
import axios from 'axios';
function DriverSignup(){

    const [drivers,setDriver]=useState({
        idNumber:"",
        name:"",
        contacts:"",
        email:"",
        password:""
    });
    const handleInputChange=(e)=>{
        setDriver({...drivers,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(drivers);
        if (drivers.password !== drivers.passwordconfirm){
            alert('passwords do not match')
            return
        }
        axios.post('http://localhost:8080/drivers/add',drivers)
        .then(response=>{
            console.log(response)

            setDriver({
                idNumber:"",
                name:"",
                contacts:"",
                email:"",
                password:""
            });
            alert('user added successfully');
            
         
        })
        .catch(error=>{
            console.error('error',error)
        })

       

    }

    return (
        <div className="container">
       

           
             
                <form className='formm' onSubmit={handleSubmit}>
                <h2>driver Signup</h2>
                
                    <label htmlFor="id">National Id</label><br />
                    <input type="text" name="idNumber" id="" placeholder="enter national id number" onChange={handleInputChange} required/><br />
                    <label htmlFor="id">Full Name</label><br />
                    <input type="text" name="name" id="" placeholder="enter full name" onChange={handleInputChange} required/><br />
                    <label htmlFor="id">contacts</label><br />
                    <input type="text" name="contacts" id="" placeholder="enter phone number" onChange={handleInputChange} required/><br />
                    <label htmlFor="email"> Email</label><br />
                    <input type="email" name="email" id="" placeholder="enter email" onChange={handleInputChange} required/><br />
                    <label htmlFor="">New Password</label><br />
                    <input type="password" name="password" id="" onChange={handleInputChange} required /><br />
                    <label htmlFor="">Confirm new password</label><br />
                    <input type="password" name="passwordconfirm" id="" required onChange={handleInputChange} /><br />
                    <button type="submit">submit</button>
                    <button className='back-button'>back</button>
                </form>
                </div>

          

         
    )
}
export default DriverSignup;