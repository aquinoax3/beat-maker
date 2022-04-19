import React, {useEffect, useState} from "react";
import "./App.css";
import Homepage from "./Homepage";
import NavBar from "./Navbar";
import Authorize from "./Authorize"

function App() {


  const [sounds, setSounds] = useState([
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

  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <div>
      <NavBar />
      <h1>Drumkit</h1>
      <div className="drums">
				{sounds.map((slap) => (
          // console.log(slap)
					<Homepage key={slap.key} slap={slap} />
				))}
			</div>
      <Authorize />
    </div>
  );
}

export default App;
