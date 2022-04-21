// import React from "react";
// import React, { useEffect, useState } from "react";
import React, {useState, useEffect} from "react";
import "./App.css";
// import useSound from 'use-sound';
// import kick08 from './kick08.mp3'


function BeatList({slap}) {
  // console.log("Each slap:", slap)

  const [playing, setPlaying] = useState(true);

	const play = () => {
		setPlaying(true);

    // console.log("Sound in terminal:", slap.slap.sound)
		new Audio(slap.sound).play();

		setTimeout(() => {
			setPlaying(false);
		}, 150);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
      // console.log("Key pressed:", e.key)
      // console.log("Key pressed:", slap.slap.key)a
			if (e.key.toLowerCase() === slap.key.toLowerCase()) {
				play();
			}
		});
	}, []);

  // const playSound = () => {
  //   // console.log("I'm clicked")
  //   console.log(this.audio.current);
  //   this.audio.current.play();
  //   // const [play] = useSound(kick08)
  //   // return
  // } 

    return(
      <div className="each-sound" onClick={play}>
        {slap.key}
		  </div>
  );
}

export default BeatList;
