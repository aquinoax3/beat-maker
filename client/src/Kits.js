import React, { useEffect, useState } from "react";
import KitCard from './KitCard';
import AddKit from "./AddKit";
import KitDropDown from "./KitDropDown";

function Kits({kits, user, addKit, setKits}) {


    // console.log("here are the kits", kits)
    // console.log("here are the user", user)

    const mapKits = kits.map((kit) => {
        return (
          <KitCard key={kit.id} kit={kit} addKit={addKit} setKits={setKits} kits={kits}/>
        //   active={true} user={kit.user_id}
        )
    })

    // console.log("current state for setKitId", kitId)


    return (  
        <div>
            {/* <div className ="kit-selection">  */}
                {mapKits}
            {/* </div> */}
            <h3>Starting A New Wave? Create a New Kit Below</h3>
            <AddKit setKits={setKits} kits={kits} user={user}/>
        </div>
    );
}

export default Kits;

