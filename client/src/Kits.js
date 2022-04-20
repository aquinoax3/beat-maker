import React, { useEffect, useState } from "react";
import KitCard from './KitCard';
import AddKit from "./AddKit";

function Kits() {

    const [kits, setKits] = useState([])
    const [user, setUser] = useState([])

    useEffect (() => {

      fetch('/users/{:id}')
      .then(resp => resp.json())
      .then(kitsData => {
        //   console.log("Kits brought in from backend:", kitsData)
          setKits(kitsData.kits);
          setUser(kitsData);
      })
  }, []);

    console.log("here are the kits", kits)
    console.log("here are the user", user)

    const mapKits = kits.map((kit) => {
        return (
          <KitCard key={kit.id} kit={kit} active={true} user={kit.user_id}/>
        )
      })

    return (  
        <div>
            <h2>Kits</h2>
                {mapKits}
            <AddKit kits={kits} user={user}/>
        </div>
    );
}

export default Kits;

