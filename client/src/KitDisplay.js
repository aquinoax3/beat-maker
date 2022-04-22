import React, {useEffect, useState} from "react";
import "./App.css";
import Kits from "./Kits";
import KitMaker from "./KitMaker";

function KitDisplay() {
    
    const [kits, setKits] = useState([])
    const [user, setUser] = useState([])
    const [myKit, setMyKit] = useState([])
    const [mySounds, setMySounds] = useState([])
    const [kitId, setKitId] = useState([])


    useEffect (() => {
        fetch('/users/{:id}')
        .then(resp => resp.json())
        .then(kitsData => {
          console.log("Kits brought in from backend:", kitsData)
            setKits(kitsData.kits);
            setUser(kitsData);
        })
    }, []);

    // console.log("kits", kits)
    // console.log("user", user)
    
    function addKit (addKitToMyKits) {
        // create const to check find and not include twice
        // console.log(addKitToMyKits, "addkittomykits")
        const checkMyBots = myKit.find(function(kit){
          return kit.id === addKitToMyKits.id
        })
        if (!checkMyBots) {
        return setMyKit([addKitToMyKits])
        }
      }
    
    //   console.log("my kit", myKit)

    return (  
        <div className="overall-div">
            <div className ="kit-selection">
                <h1>Kit Selection</h1>
                <Kits setKits={setKits} kits={kits} user={user} addKit={addKit}/>
            </div>

            <div className ="kit-maker">
                <KitMaker myKit={myKit} addKit={addKit} user={user} />
            </div>
        </div>
    );
    }
export default KitDisplay;


