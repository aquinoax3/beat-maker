import React from "react";

function KitMaker({myKit, user}) {
  //your bot army code here...
  // create const with function to display bots simialr to bot collection
//   const myBotArmy = myBots.map(function(oneMyBot) {
//     // console.log("One my Bot: ", oneMyBot)
//     return <BotCard key={oneMyBot.id} bot={oneMyBot} onChangeBot={removeBot} deleteBot={deleteBot}/>
//   })

    console.log("my Kit in KitMaker", myKit[0])

let thisKit = myKit[0]

  return (
    <div className="your-kit-sounds">
          Your Kit
        <h2>Check Out Your Beats</h2>
        <h1>{thisKit.name}</h1>
        
    </div>
  );
}

export default KitMaker;
