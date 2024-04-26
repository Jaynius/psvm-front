// import './Commuter.css'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// function CommuterProfile(){
//     const [idNumber, setIdNumber] = useState(''); // State to store entered ID number
//     const [user, setUser] = useState(); 

//     const fetchUserProfile = async () => {
//         try {
            
//             const response = await axios.get(`http://localhost:8080/users/user/${idNumber}`);
//             setUser(response.data); 
//         } catch (error) {
//             console.error('Error fetching user profile:', error);
//         }
//     };
//     return(
//         <div className="commuter-contents">
//        <div className="commuter-operations">
//         <h1>operations</h1>
//         <button className='ops-btn'> update profile</button>
//         <button className='ops-btn'>delete profile</button>
//         <Link className='ops-btn' to='/boarding'> board vehicle</Link>
//        </div>
//         <div className="search-details">
//         <label htmlFor="">Enter ID number:</label>
//                 <input type="text" name="idNumber" id="" onChange={(e) => setIdNumber(e.target.value)} /><br />
//                 <button onClick={()=>fetchUserProfile()}>search</button>
//             <h2>commuter profile</h2>
//             <div className="details">

                
//                 <label htmlFor="">ID number:{user.idNumber} </label>
//                 <label htmlFor="">Name:{user.name}</label>
//                 <label htmlFor=""> contacts:{user.contacts}</label>
//                 <label htmlFor="">Email:{user.email}</label>
//             </div>

//         </div>
//     </div>
//     )
// }
// export default CommuterProfile;
import './Commuter.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // Import axios

function CommuterProfile() {
    const [idNumber, setIdNumber] = useState(''); // State to store entered ID number
    const [user, setUser] = useState(); // State to store user data

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/users/user/${idNumber}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    return (
        <div className="commuter-contents">
            <div className="commuter-operations">
                <h1>Operations</h1>
                <button className='ops-btn'>Update Profile</button>
                <button className='ops-btn'>Delete Profile</button>
                <Link className='ops-btn' to='/boarding'>Board Vehicle</Link>
            </div>
            <div className="search-details">
                <label htmlFor="">Enter ID number:</label>
                <input type="text" name="idNumber" id="" onChange={(e) => setIdNumber(e.target.value)} /><br />
                <button onClick={fetchUserProfile}>Search</button>
                <h2>Commuter Profile</h2>
                {/* Conditionally render user details */}
                {user && (
                    <div className="details">
                        <label htmlFor="">ID number: {user.idNumber}</label>
                        <label htmlFor="">Name: {user.name}</label>
                        <label htmlFor="">Contacts: {user.contacts}</label>
                        <label htmlFor="">Email: {user.email}</label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommuterProfile;

