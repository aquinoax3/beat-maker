import React, { useEffect, useState } from "react";
import KitCard from './KitCard';
import AddKit from "./AddKit";

function Kits() {

    const [kits, setKits] = useState([])

    useEffect (() => {
      fetch('/users/{:id}')
      .then(resp => resp.json())
      .then(kitsData => {
        //   console.log(kitsData.kits)
          setKits(kitsData.kits);
      })
  }, []);

    console.log("here are the kits", kits)
    const mapKits = kits.map((kit) => {
        return (
          <KitCard key={kit.id} kit={kit} active={true} user={kit.user_id}/>
        )
      })

    return (  
        <div>
            <h2>Kits</h2>
                {mapKits}
            {/* <AddKit /> */}
        </div>
    );
}

export default Kits;

