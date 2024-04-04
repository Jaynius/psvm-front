import './Commuter.css'

function CommuterProfile(){
    return(
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
    )
}
export default CommuterProfile;