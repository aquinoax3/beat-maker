import React, { useEffect, useState } from "react";
import BeatList from "./BeatList";


function Beats() {

    const [sounds, setSounds] = useState([

        //   useEffect (() => {
        //     fetch('')
        //     .then(resp => resp.json())
        //     .then(userData => {
        //         console.log("User Data:", userData);
        //         setSounds(userData)
        //     })
        // }, []);
            {
              name: "kick",
              // sound: require('./SoundSamples/kick08.wav').default,
              sound: './SoundSamples/kick08.wav',
              key: "A",
            },
            {
              name: "hi-hat",
              // sound: require('./SoundSamples/hi-hat-058.wav').default,
              sound: './SoundSamples/hi-hat-058.wav',
              key: "S",
            },
          ]);
        
          const mapSounds = sounds.map((slap) => {
            return (
              <BeatList key={slap.key} slap={slap} />
            )
          })

    return ( 
        <div>
            <h2>Beats</h2>
            <div>{mapSounds}</div>
        </div>
    );
}

export default Beats;