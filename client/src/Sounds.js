import React, { useEffect, useState } from "react";
import BeatList from "./BeatList";


function Sounds({beatsInKit}) {

  // const [sounds, setSounds] = useState([])
  console.log("beats in kit", beatsInKit)

  // function handleBeatsInKit () {
  //   setSounds(beatsInKit)
  // }

  // console.log("beatsinkit in sounds state", sounds)

  //   useEffect (() => {
  //     fetch('/sounds')
  //     .then(resp => resp.json())
  //     .then(samples => {
  //         setSounds(samples);
  //     })
  // }, []);

    //   {
    //     name: "kick",
    //     // sound: require('./SoundSamples/kick08.wav').default,
    //     sound: './SoundSamples/kick08.wav',
    //     key: "A",
    //   },
    //   {
    //     name: "hi-hat",
    //     // sound: require('./SoundSamples/hi-hat-058.wav').default,
    //     sound: './SoundSamples/hi-hat-058.wav',
    //     key: "S",
    //   },
    // ]);
  
    const mapSounds = beatsInKit.map((slap) => {
      return (
        // console.log(slap)
        <BeatList key={slap.id} slap={slap} />
      )
    })

    return ( 
        <div className="sounds-container">
            <div className="sounds-display">
              {mapSounds}
            </div>
        </div>
    );
}

export default Sounds;