import React from 'react';


function Home() {
    return ( 
        <div >
            <div className="hp-image">
                <div className='home-pic'> </div>
                <h1 className="home-page">Welcome to AirBnB But Betta</h1>
                <p className="future"> The future of stays</p>
                <p className='booking'> Give us a call to book!</p>
                <div className="lefty-call-div">
                    <a className="lefty-call" href="https://www.youtube.com/watch?v=U4SmvlRmdsY" target="_blank"> (Righty calls only - no lefty calls...) </a>  
                </div>      
            </div> 
        </div> 
    );
}

export default Home;