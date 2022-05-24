import React from 'react';
import "./Style.css";

const count = [1,2,3,4,5,6,7,8]
const TopDestinations = () => {
    return (
    <div className='destinations'>
        <div className="dest-top section d-flex-sb">
            <div className="dest-head">
        <h1>Top Destinations</h1>
        <p>This is the most popular destination in the world</p>
        </div>
          <p>View all Destinations</p>
        </div>

        <div className="d-grid-4c2r"> 
        { count.map((element)=> {
            return <div className="dest-card">
            <img src={`https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/destination-${element}.jpg`} alt=" "></img>
            <div className="value">
                <h1>Rajasthan</h1>
                <div className="lower">
                    <p>5 Days |</p>
                    <h4>$300</h4>
                    </div>
                </div>
            </div>
        })}
        
      
        </div>
        
    </div>
    );
}


export default TopDestinations;