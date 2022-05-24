import React from 'react';
const count = [1, 2, 3, 4, 5];

const Last = () => {
    return <div>
        <div className="d-flex">
        
            { count.map((element)=> {
                console.log('yes');
            return <div className="instagram-post" key={element}
                style={{backgroundImage:`url('https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/instagram-${element}.jpg')`}}>
                </div>
                
        
    })}
    

            
        </div>
    </div>;
}


export default Last;