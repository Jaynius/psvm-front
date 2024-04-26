import React from 'react';
import './Commuter.css'
function Boarding() {
    return (
        <div className='boarding-container'>
            <div className="boarding-form">
                <h1>vehicle boarding</h1>
                <form action="">
                    <label htmlFor="">enter id number</label>
                    <input type="text" name="" id="" placeholder='id number' />
                    <label htmlFor="">vehicle registration</label>
                    <input type="text" name="" id="" placeholder='id number' />
                    <label htmlFor="">enter id number</label>
                    <input type="text" name="" id="" placeholder='id number' />
                    <button type="submit">board vehicle</button>
                </form>
            </div>
           
        </div>
    );
}

export default Boarding;