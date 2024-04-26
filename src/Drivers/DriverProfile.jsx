import { useEffect, useState } from "react";

function DriverProfile(){
    // const [driver, setDriver]=useState("");

    // useEffect(()=>{
    //     const fetchDriverprofile=async()=>{
    //         try {
    //             const response=await  axios.get("http://localhost:8080/driver/{idnumber}")
    //             setDriver(response.data)
    //         } catch (error) {
    //             console.error("error fetching driver:",error)
                
    //         }
    //     }
    //     fetchDriverprofile();
    // },[]);
    return(
        <div className="commuter-contents">
       <div className="commuter-operations">
        <h1>operations</h1>
        <button className='ops-btn'> update profile</button>
        <button className='ops-btn'>delete profile</button>
        {/* <Link className='ops-btn' to='/boarding'> board vehicle</Link> */}
       </div>
        <div className="search-details">
            <h2>driver profile</h2>
            <div className="details">
                <label htmlFor="">ID number: </label>
                <label htmlFor="">Name:</label>
                <label htmlFor=""> contacts:</label>
                <label htmlFor="">Email</label>
            </div>

        </div>
    </div>
    )
}
export default DriverProfile;