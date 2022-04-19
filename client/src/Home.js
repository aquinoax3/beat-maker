import React from 'react';
import Authorize from './Authorize';


function Home() {
    return ( 
        <div >
            <div className="hp-image">
                <div className='home-pic'> </div>
                <h1 className="welcome-home-page">Welcome to BeatMaker</h1>
                <p className="welcome-future"> The Future of Beats</p>
                <p className="welcome-log-in"> Log-in below and drop that heat</p>
                <Authorize />
            </div> 
        </div> 
    );
}

export default Home;