import React from 'react';
import SignUp from './SignUp';


function Home() {




    return ( 
        <div >
            <div className="hp-image">
                <div className='home-pic'> </div>
                <h1 className="welcome-home-page">Welcome to BeatMaker</h1>
                <p className="welcome-future"> The Future of Beats</p>
                <p className="welcome-log-in">Sign Up below and drop that heat</p>
                <SignUp />
                <div className="img_hold">
                <img className="recordz" src="https://thumbs.gfycat.com/AntiqueWellgroomedAlaskanhusky-size_restricted.gif" alt="record"></img>
                </div>
            </div> 
        </div> 
    );
}

export default Home;