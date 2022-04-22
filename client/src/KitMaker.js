import React from "react";
import Sounds from "./Sounds";

function KitMaker({myKit, user}) {
  //your bot army code here...
  // create const with function to display bots simialr to bot collection
//   const myBotArmy = myBots.map(function(oneMyBot) {
//     // console.log("One my Bot: ", oneMyBot)
//     return <BotCard key={oneMyBot.id} bot={oneMyBot} onChangeBot={removeBot} deleteBot={deleteBot}/>
//   })

    console.log("my Kit in KitMaker", myKit)

// let thisKit = myKit[0]

    function checkThisKit () {
        if (myKit[0])
            return <h1>{myKit[0].name}</h1>
        else {
            return <p classname="intro-message">Click on that ish to the left</p>
        }
    }

    function checkThisSound () {
        if (myKit[0])
            return <Sounds beatsInKit={myKit[0].sounds} />
        else {
            return <p classname="intro-message">Check Yo Sounds Bro - What Are You Waiting For?</p>
        }
    }

  return (
    <div className="your-kit-sounds">
          {/* Your Kit */}
        <h1 className="check-out-beats">Check Out Your Beats</h1>
        {checkThisKit()}
        <h3>Sounds</h3>
        {checkThisSound()}
    </div>
  );
}

export default KitMaker;
