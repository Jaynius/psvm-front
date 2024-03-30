import { useState } from 'react';
import './Drivers.css'

function Drivers(){

    const [content,setContent]=useState('');


    const handleButtonClick=(contentType)=>{
        switch (contentType){
            case "create-profile":
                setContent("");
                break;
            case "update-profile":
                setContent("");
                break;
            case "delete-profile":
                setContent("");
                break;
            case "sign-out":
                setContent("");
                break;
            default:
                setContent("");
                break;
        }
    }
    return(
        <div className="drivers-container">
            <div className="drivers-header">
                <button className="create-profile"  onClick={() => handleButtonClick('create-profile')}> Create Profile</button>
                <button className="update-profile"  onClick={() => handleButtonClick("update-profile")}>update profile</button>
                <button className="delete-profile"  onClick={() => handleButtonClick("delete-profile")}>delete profile</button>
                <button className="sign-out"  onClick={() => handleButtonClick("sign-out")}>sign out</button>
            </div>
            <div className="display-container">

            </div>
        </div>
    )
}

export default Drivers;