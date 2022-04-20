import React, { useState } from 'react'

function KitCard ({kit, handleClickKit}) {
    const [className, setClassName] = useState(false);



    function clickHouse(){
        handleClickKit(kit);
    }
    
    return (
        <div className="kit-card" onClick={clickHouse}>
            <div className="picture" ></div>
            <div className='kit-card-footer'> 
                <button className='post'>
                    {/* <a href="http://localhost:3000/travellist">Post a Review</a> */}
                </button>
                <button className='book'>
                    {/* <a href="http://localhost:3000/">Book</a> */}
                </button>
            </div>
        </div>
    )
}

export default KitCard;