import React, { useEffect, useState } from "react";
import KitCard from './KitCard';

function Kits() {

    const [kits, setKits] = useState([])

    useEffect (() => {
      fetch('/users')
      .then(resp => resp.json())
      .then(kitsData => {
          console.log(kitsData)
        //   setSounds(samples);
      })
  }, []);

    // const mapSounds = kits.map((slap) => {
    //     return (
    //       <KitCard key={slap.key} slap={slap} />
    //     )
    //   })

    return (  
        <div>
            <h2>Kits</h2>
            {/* <KitCard /> */}
        </div>
    );
}

export default Kits;

