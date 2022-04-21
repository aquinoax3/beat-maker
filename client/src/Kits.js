import React, { useEffect, useState } from "react";
import KitCard from './KitCard';
import AddKit from "./AddKit";
import KitDropDown from "./KitDropDown";

function Kits() {

    const [kits, setKits] = useState([])
    const [user, setUser] = useState([])
    const [kitId, setKitId] = useState([])

    useEffect (() => {

      fetch('/users/{:id}')
      .then(resp => resp.json())
      .then(kitsData => {
        //   console.log("Kits brought in from backend:", kitsData)
          setKits(kitsData.kits);
          setUser(kitsData);
      })
  }, []);

    // console.log("here are the kits", kits)
    // console.log("here are the user", user)

    const mapKits = kits.map((kit) => {
        return (
          <KitCard key={kit.id} kit={kit} active={true} user={kit.user_id}/>
        )
    })

    console.log("current state for setKitId", kitId)


    return (  
        <div>
            <h1>Kit Selection</h1>
                {mapKits}
            <h3>Starting A New Wave? Create a New Kit Below</h3>
            <AddKit kits={kits} user={user}/>
        </div>
    );
}

export default Kits;

