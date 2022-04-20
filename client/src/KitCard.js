import React, { useEffect, useState } from "react";
import Beats from "./Beats";



function KitCard ({kit, handleClickKit}) {
    const [beatsInKit, setBeatsInKit] = useState([]);
    // console.log("kit", kit)
    console.log("kit sounds data", beatsInKit)

    function clickKit (event) {
        // handleClickKit(kit);
        event.preventDefault();
        // setBeatsInKit([]);
        console.log("Kit was clicked", kit)
        fetch(`/kits/${kit.id}`)
        .then(resp => resp.json())
        .then(kitsData => {
            // console.log(kitsData)
            // setBeatsInKit();
            setBeatsInKit(kitsData.sounds);
        })
    }

    // function handleSoundsInKit (kitSounds) {
    //     // console.log("this is new review:", newReview)
    //     setBeatsInKit([kitSounds])
    // }

    // // const thisKit = useEffect (() => {
    //     fetch('/kits/${kit.id}')
    //     .then(resp => resp.json())
    //     .then(kitsData => {
    //         console.log(kitsData.kits)
    //         // setBeatsInKit(kitsData.kits);
    //     })
    // }, []);

    
    return (
        <div className="kit-card" >
            {/* <a href="http://localhost:4000/sounds" onClick={(event) => clickKit(event)} className="kit-name" >{kit.name}</a> */}
            <h1 onClick={(event) => clickKit(event)} className="kit-name" >{kit.name}</h1>
            <Beats beatsInKit={beatsInKit}/>
            <p>Delete Your Kit Below</p>
            <button>Delete</button>
        </div>
    )
}

export default KitCard;