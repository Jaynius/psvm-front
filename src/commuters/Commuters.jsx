import './Commuter.css';
function Commuters(){


    return(
        <div className="commuter-container">
            <div className="commuter-header">
                <button>create profile</button>
                <button>view profile</button>
                <button>update profile</button>
                <button>delete profile</button>
            </div>
            <div className="commuter-contents">
                <div className='search-container'>
                <input type="text" name="search" id="" placeholder="enter commuter id numbers" />
                <button className="search">search</button>
                </div>
                <div className="search-details">
                    <h2>Commuter History</h2>
                    <div className="details">
                        <ol>
                            <li ></li>
                            <li></li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default Commuters;